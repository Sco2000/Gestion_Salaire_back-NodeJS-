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
exports.PayRunService = void 0;
const payRunScheduler_js_1 = require("./jobs/payRunScheduler.js");
class PayRunService {
    static getAll(entreprisePrisma, offset, limit, searchStartDate, searchEndDate, searchType, sortBy, order, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const where = {};
            try {
                if (searchStartDate) {
                    where.periodeDebut = { gte: searchStartDate };
                }
                if (searchEndDate) {
                    where.periodeFin = { lte: searchEndDate };
                }
                if (searchType) {
                    where.statut = searchType;
                }
                const payRun = yield entreprisePrisma.payRun.findMany({
                    where,
                    skip: offset,
                    take: limit,
                    orderBy: {
                        [sortBy]: order
                    },
                    include: { bulletins: true }
                });
                return payRun;
            }
            catch (error) {
                next(error);
            }
        });
    }
    static count(entreprisePrisma, searchStartDate, searchEndDate, searchType) {
        return __awaiter(this, void 0, void 0, function* () {
            const where = {};
            if (searchStartDate) {
                where.periodeDebut = { gte: searchStartDate };
            }
            if (searchEndDate) {
                where.periodeFin = { lte: searchEndDate };
            }
            if (searchType) {
                where.statut = searchType;
            }
            return yield entreprisePrisma.payRun.count({ where });
        });
    }
    static create(entreprisePrisma, data, entrepriseId) {
        return __awaiter(this, void 0, void 0, function* () {
            const payRun = yield entreprisePrisma.payRun.create({ data });
            yield (0, payRunScheduler_js_1.schedulePayRunCalculation)(payRun, entrepriseId);
            return payRun;
        });
    }
    static calculerJoursTravailles(entreprisePrisma, employeId, debut, fin) {
        return __awaiter(this, void 0, void 0, function* () {
            // Compte le nombre de jours distincts où l'employé a pointé
            const jours = yield entreprisePrisma.pointages.groupBy({
                by: ['date'],
                where: {
                    employeId,
                    date: { gte: debut, lte: fin }
                }
            });
            return jours.length;
        });
    }
    static calculerHeuresTravailles(entreprisePrisma, employeId, debut, fin) {
        return __awaiter(this, void 0, void 0, function* () {
            // Additionne les heures travaillées sur la période
            const pointages = yield entreprisePrisma.pointages.findMany({
                where: {
                    employeId,
                    date: { gte: debut, lte: fin }
                }
            });
            let totalHeures = 0;
            for (const p of pointages) {
                const entree = new Date(p.entree);
                const sortie = new Date(p.sortie);
                const heures = (sortie.getTime() - entree.getTime()) / (1000 * 60 * 60);
                totalHeures += heures;
            }
            return totalHeures;
        });
    }
}
exports.PayRunService = PayRunService;
//# sourceMappingURL=PayRunService.js.map