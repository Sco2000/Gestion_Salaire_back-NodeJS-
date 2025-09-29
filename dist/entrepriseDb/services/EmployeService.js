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
exports.EmployeService = void 0;
const ErrorsMessagesFr_js_1 = require("../../enum/ErrorsMessagesFr.js");
const StatusCode_js_1 = require("../../enum/StatusCode.js");
class EmployeService {
    static getAll(entreprisePrisma, offset, limit, searchText, searchStatus, sortBy, order) {
        return __awaiter(this, void 0, void 0, function* () {
            const where = {};
            if (searchText) {
                where.OR = [
                    { nom: { contains: searchText } },
                    { prenom: { contains: searchText } },
                    { email: { contains: searchText } },
                ];
            }
            if (searchStatus) {
                where.statut = searchStatus;
            }
            const employes = yield entreprisePrisma.employes.findMany({
                skip: offset,
                take: limit,
                where,
                orderBy: {
                    [sortBy]: order,
                },
            });
            if (!employes)
                throw { status: StatusCode_js_1.HttpStatusCode.BAD_REQUEST, message: ErrorsMessagesFr_js_1.ErrorsMessagesFr.INCORRECT_CREDENTIALS };
            return employes;
        });
    }
    static count(entreprisePrisma, searchText, searchStatus) {
        return __awaiter(this, void 0, void 0, function* () {
            const where = {};
            if (searchText) {
                where.OR = [
                    { nom: { contains: searchText } },
                    { prenom: { contains: searchText } },
                    { email: { contains: searchText } },
                ];
            }
            if (searchStatus) {
                where.etat = searchStatus;
            }
            return yield entreprisePrisma.employes.count({ where });
        });
    }
    static update(entreprisePrisma, employeId, data) {
        return __awaiter(this, void 0, void 0, function* () {
            const OMtask = yield entreprisePrisma.employes.findUnique({ where: { id: employeId } });
            if (!OMtask)
                throw { status: StatusCode_js_1.HttpStatusCode.NOT_FOUND, message: ErrorsMessagesFr_js_1.ErrorsMessagesFr.EMPLOYE_INTROUVABLE };
            const employes = yield entreprisePrisma.employes.update({ where: { id: employeId }, data });
            return employes;
        });
    }
}
exports.EmployeService = EmployeService;
//# sourceMappingURL=EmployeService.js.map