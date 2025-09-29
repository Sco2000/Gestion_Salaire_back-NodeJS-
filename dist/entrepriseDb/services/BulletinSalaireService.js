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
exports.BulletinSalaireService = void 0;
class BulletinSalaireService {
    static getAll(entreprisePrisma, offset, limit, searchText, searchStatus, sortBy, order, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const where = {};
            try {
                if (searchText) {
                    where.employe = {
                        OR: [
                            { nom: { contains: searchText } },
                            { prenom: { contains: searchText } },
                            { email: { contains: searchText } },
                        ],
                    };
                }
                if (searchStatus) {
                    where.employe = Object.assign(Object.assign({}, where.employe), { statut: searchStatus });
                }
                const bulletinsSalaire = yield entreprisePrisma.bulletinsSalaire.findMany({
                    where,
                    skip: offset,
                    take: limit,
                    orderBy: {
                        [sortBy]: order
                    },
                    include: { employe: true }
                });
                return bulletinsSalaire;
            }
            catch (error) {
                next(error);
            }
        });
    }
    static count(entreprisePrisma, searchText, searchStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            const where = {};
            if (searchText) {
                where.employe = {
                    OR: [
                        { nom: { contains: searchText } },
                        { prenom: { contains: searchText } },
                        { email: { contains: searchText } },
                    ],
                };
            }
            if (searchStatus) {
                where.employe = Object.assign(Object.assign({}, where.employe), { statut: searchStatus });
            }
            return yield entreprisePrisma.bulletinsSalaire.count({ where });
        });
    }
}
exports.BulletinSalaireService = BulletinSalaireService;
//# sourceMappingURL=BulletinSalaireService.js.map