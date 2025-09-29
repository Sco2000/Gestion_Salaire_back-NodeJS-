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
const entreprise_1 = require("../../prisma/generated/entreprise");
const prisma = new entreprise_1.PrismaClient({
    datasources: {
        db: { url: process.env.DSN_ENTREPRISE_1 }
    }
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        var _a, _b, _c, _d;
        console.log("Début du seeding...");
        // Seed des employés
        yield prisma.employes.createMany({
            data: [
                {
                    nom: "Diop",
                    prenom: "Ousmane",
                    email: "ousmane.diop@example.com",
                    telephone: "770000001",
                    poste: "Comptable",
                    date_embauche: new Date("2022-01-15"),
                    salaire_base: 500000,
                    typeContrat: entreprise_1.TypeContrat.FIXE,
                    statut: entreprise_1.Statut.ACTIF,
                },
                {
                    nom: "Fall",
                    prenom: "Aissatou",
                    email: "aissatou.fall@example.com",
                    telephone: "770000002",
                    poste: "Caissière",
                    date_embauche: new Date("2023-03-01"),
                    tauxHoraire: 2000,
                    typeContrat: entreprise_1.TypeContrat.HONORAIRE,
                    statut: entreprise_1.Statut.ACTIF,
                },
                {
                    nom: "Sarr",
                    prenom: "Mamadou",
                    email: "mamadou.sarr@example.com",
                    telephone: "770000003",
                    poste: "Technicien",
                    date_embauche: new Date("2021-07-10"),
                    tauxJournalier: 15000,
                    typeContrat: entreprise_1.TypeContrat.JOURNALIÈRE,
                    statut: entreprise_1.Statut.ACTIF,
                },
            ],
            skipDuplicates: true,
        });
        // Récupérer les employés pour créer les bulletins
        const employes = yield prisma.employes.findMany();
        // Seed des bulletins
        for (const employe of employes) {
            yield prisma.bulletinsSalaire.createMany({
                data: [
                    {
                        employeId: employe.id,
                        mois: "2025-08",
                        salaire_base: (_a = employe.salaire_base) !== null && _a !== void 0 ? _a : 0,
                        deductions: 0,
                        salaire_net: (_b = employe.salaire_base) !== null && _b !== void 0 ? _b : 0,
                    },
                    {
                        employeId: employe.id,
                        mois: "2025-09",
                        salaire_base: (_c = employe.salaire_base) !== null && _c !== void 0 ? _c : 0,
                        deductions: 0,
                        salaire_net: (_d = employe.salaire_base) !== null && _d !== void 0 ? _d : 0,
                    },
                ],
                skipDuplicates: true,
            });
        }
        console.log("Seeding terminé ✅");
    });
}
main()
    .catch((e) => {
    console.error(e);
    process.exit(1);
})
    .finally(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}));
//# sourceMappingURL=entrepriseSeeders.js.map