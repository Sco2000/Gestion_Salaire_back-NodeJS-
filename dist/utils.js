"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePayRunPeriod = validatePayRunPeriod;
exports.genererPayRun = genererPayRun;
const client_1 = require("../prisma/generated/entreprise/client");
const library_1 = require("@prisma/client/runtime/library");
const PayRunService_1 = require("./entrepriseDb/services/PayRunService");
function validatePayRunPeriod(type, debut, fin) {
    const diffMs = fin.getTime() - debut.getTime();
    const diffDays = diffMs / (1000 * 60 * 60 * 24);
    const diffHours = diffMs / (1000 * 60 * 60);
    if (type === "MENSUEL") {
        if (diffDays < 27 || diffDays > 30) {
            throw new Error("Pour un type MENSUEL, la période doit être entre 27 et 30 jours.");
        }
    }
    else if (type === "HEBDOMADAIRE") {
        if (diffDays < 4 || diffDays > 6) {
            throw new Error("Pour un type HEBDOMADAIRE, la période doit être entre 4 et 6 jours.");
        }
    }
    else if (type === "JOURNALIER") {
        if (diffHours > 22) {
            throw new Error("Pour un type JOURNALIER, la période doit être de maximum 22 heures.");
        }
    }
}
function genererPayRun(entreprisePrisma, payRunId) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c;
        // 1️⃣ Récupérer le PayRun
        const payRun = yield entreprisePrisma.payRun.findUnique({ where: { id: payRunId } });
        if (!payRun)
            throw new Error(`PayRun ${payRunId} non trouvé`);
        // 2️⃣ Déterminer les types de contrats concernés
        let contratsCibles = [];
        if (payRun.typePayRun === "MENSUEL") {
            contratsCibles = [client_1.TypeContrat.CDI, client_1.TypeContrat.CDD];
        }
        else {
            contratsCibles = [client_1.TypeContrat.JOURNALIER, client_1.TypeContrat.HORAIRE];
        }
        // 3️⃣ Récupérer les contrats actifs
        const contratsActifs = yield entreprisePrisma.contrat.findMany({
            where: {
                type: { in: contratsCibles },
                date_arret: null,
            },
            include: { employe: true },
        });
        console.log("PayRun récupéré :", payRun);
        console.log("Contrats ciblés :", contratsCibles);
        console.log("Contrats actifs trouvés :", contratsActifs.length);
        // 4️⃣ Pour chaque contrat/employé, calculer le salaire et créer le bulletin
        for (const contrat of contratsActifs) {
            const employe = contrat.employe;
            let salaireBase = 0;
            switch (contrat.type) {
                case client_1.TypeContrat.CDI:
                case client_1.TypeContrat.CDD:
                    salaireBase = (_a = contrat.salaireFixe) !== null && _a !== void 0 ? _a : 0;
                    break;
                case client_1.TypeContrat.JOURNALIER:
                    // Nombre de jours travaillés sur la période
                    const joursTravailles = yield PayRunService_1.PayRunService.calculerJoursTravailles(entreprisePrisma, employe.id, payRun.periodeDebut, payRun.periodeFin);
                    console.log(`Employé ${employe.id} - Jours travaillés :`, joursTravailles);
                    salaireBase = ((_b = contrat.tauxJournalier) !== null && _b !== void 0 ? _b : new library_1.Decimal(0)).mul(joursTravailles);
                    break;
                case client_1.TypeContrat.HORAIRE:
                    // Nombre d'heures travaillées sur la période
                    const heuresTravailles = yield PayRunService_1.PayRunService.calculerHeuresTravailles(entreprisePrisma, employe.id, payRun.periodeDebut, payRun.periodeFin);
                    console.log(`Employé ${employe.id} - Heures travaillées :`, heuresTravailles);
                    salaireBase = ((_c = contrat.tauxHoraire) !== null && _c !== void 0 ? _c : new library_1.Decimal(0)).mul(heuresTravailles);
                    break;
            }
            console.log(`Création bulletin pour employé ${employe.id}, salaire: ${salaireBase}`);
            // 5️⃣ Créer le bulletin de salaire
            yield entreprisePrisma.bulletinsSalaire.create({
                data: {
                    employeId: employe.id,
                    payRunId: payRun.id,
                    mois: payRun.periodeDebut.toISOString().slice(0, 7), // "YYYY-MM"
                    salaire_base: salaireBase,
                    deductions: 0,
                    salaire_net: salaireBase,
                    date_generation: new Date(),
                },
            });
        }
    });
}
//# sourceMappingURL=utils.js.map