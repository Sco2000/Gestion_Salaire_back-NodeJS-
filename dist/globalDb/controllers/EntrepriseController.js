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
exports.EntrepriseController = void 0;
const zod_1 = require("zod");
const ErrorsMessagesFr_1 = require("../../enum/ErrorsMessagesFr");
const StatusCode_1 = require("../../enum/StatusCode");
const global_1 = require("../../../prisma/generated/global");
const EntrepriseService_1 = require("../services/EntrepriseService");
const CreateCompanySchema = zod_1.z.object({
    nom: zod_1.z.string().min(1),
    email: zod_1.z.string().email(),
    telephone: zod_1.z.string().min(1),
    deviseId: zod_1.z.number(),
});
class EntrepriseController {
    static createCompany(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = CreateCompanySchema.safeParse(req.body);
                if (!result.success) {
                    return res.status(400).json({
                        success: false,
                        errors: result.error.issues,
                    });
                }
                const { nom, email, telephone, deviseId } = result.data;
                const existing = yield EntrepriseService_1.EntrepriseService.findCompanyByEmail(email);
                if (existing) {
                    return res.status(StatusCode_1.HttpStatusCode.BAD_REQUEST).json({
                        success: false,
                        message: ErrorsMessagesFr_1.ErrorsMessagesFr.USER_ALREADY_EXISTS,
                    });
                }
                const dbKey = `DSN_ENTREPRISE_${nom.replace(/\s+/g, '_').toUpperCase()}_${Date.now()}`;
                const dbName = `entreprise_${nom.replace(/\s+/g, '_').toLowerCase()}_${Date.now()}`;
                yield EntrepriseService_1.EntrepriseService.createDatabase(dbName);
                const dsn = `mysql://root:ousmane00@localhost:3306/${dbName}`;
                yield EntrepriseService_1.EntrepriseService.addToEnv(dbKey, dsn);
                yield EntrepriseService_1.EntrepriseService.runMigrations(dsn);
                const company = yield EntrepriseService_1.EntrepriseService.createCompanyRecord({
                    nom,
                    email,
                    telephone,
                    dbKey,
                    deviseId,
                    Statut: global_1.Statut.ACTIF,
                });
                res.json({
                    success: true,
                    message: 'Entreprise créée avec succès',
                    company,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static getAllCompanies(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(req.query);
                const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1;
                const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 6;
                const offset = (page - 1) * limit;
                const searchText = req.query.search || "";
                const searchStatus = req.query.status || "";
                const sortBy = req.query.sortBy || "date_generation";
                const ordr = req.query.order === "desc" ? "desc" : "asc";
                const companies = yield EntrepriseService_1.EntrepriseService.listCompanies(offset, limit, searchText, searchStatus, sortBy, ordr, next);
                res.json({
                    success: true,
                    companies,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
    static countCompanies(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const total = yield EntrepriseService_1.EntrepriseService.countNbCompanies();
                const actifs = yield EntrepriseService_1.EntrepriseService.countActifCompanies();
                const inactifs = total - actifs;
                res.json({
                    success: true,
                    total,
                    actifs,
                    inactifs,
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.EntrepriseController = EntrepriseController;
//# sourceMappingURL=EntrepriseController.js.map