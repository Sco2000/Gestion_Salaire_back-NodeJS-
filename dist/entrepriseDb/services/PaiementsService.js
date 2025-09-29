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
exports.PaiementsService = void 0;
class PaiementsService {
    static getAll(entreprisePrisma, offset, limit, searchText, searchStatus, searchMode, searchPaiementStatut, sortBy, order, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const where = {};
            try {
                // Filtre sur le paiement
                if (searchMode) {
                    where.mode = searchMode;
                }
                if (searchPaiementStatut) {
                    where.statut = searchPaiementStatut;
                }
                // Filtre sur l'employé (via le bulletin)
                if (searchText || searchStatus) {
                    where.bulletin = {
                        employe: {}
                    };
                    if (searchText) {
                        where.bulletin.employe.OR = [
                            { nom: { contains: searchText } },
                            { prenom: { contains: searchText } },
                            { email: { contains: searchText } }
                        ];
                    }
                    if (searchStatus) {
                        where.bulletin.employe.statut = searchStatus;
                    }
                }
                const paiements = yield entreprisePrisma.paiement.findMany({
                    where,
                    skip: offset,
                    take: limit,
                    orderBy: {
                        [sortBy]: order
                    },
                    include: { bulletin: true }
                });
                return paiements;
            }
            catch (error) {
                next(error);
            }
        });
    }
    static count(entreprisePrisma, searchText, searchStatus, searchMode, searchPaiementStatut) {
        return __awaiter(this, void 0, void 0, function* () {
            const where = {};
            if (searchMode) {
                where.mode = searchMode;
            }
            if (searchPaiementStatut) {
                where.statut = searchPaiementStatut;
            }
            if (searchText || searchStatus) {
                where.bulletin = {
                    employe: {}
                };
                if (searchText) {
                    where.bulletin.employe.OR = [
                        { nom: { contains: searchText } },
                        { prenom: { contains: searchText } },
                        { email: { contains: searchText } }
                    ];
                }
                if (searchStatus) {
                    where.bulletin.employe.statut = searchStatus;
                }
            }
            return yield entreprisePrisma.paiement.count({ where });
        });
    }
}
exports.PaiementsService = PaiementsService;
//# sourceMappingURL=PaiementsService.js.map