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
exports.SuperAdminController = void 0;
const zod_1 = require("zod");
const ErrorsMessagesFr_1 = require("../../enum/ErrorsMessagesFr");
const StatusCode_1 = require("../../enum/StatusCode");
const global_1 = require("../../../prisma/generated/global");
const SuperAdminService_1 = require("../services/SuperAdminService");
const CreateCompanySchema = zod_1.z.object({
    nom: zod_1.z.string().min(1),
    email: zod_1.z.string().email(),
    telephone: zod_1.z.string().min(1),
    deviseId: zod_1.z.number(),
});
const AddUserSchema = zod_1.z.object({
    nom: zod_1.z.string().min(1),
    prenom: zod_1.z.string().min(1),
    login: zod_1.z.string().min(3),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    role: zod_1.z.enum(['ADMIN', 'CAISSIER']),
});
class SuperAdminController {
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
                // Vérifie si l'entreprise existe déjà
                const existing = yield SuperAdminService_1.SuperAdminService.findCompanyByEmail(email);
                if (existing) {
                    return res.status(StatusCode_1.HttpStatusCode.BAD_REQUEST).json({
                        success: false,
                        message: ErrorsMessagesFr_1.ErrorsMessagesFr.USER_ALREADY_EXISTS,
                    });
                }
                // Génère un dbKey unique
                const dbKey = `DSN_ENTREPRISE_${nom.replace(/\s+/g, '_').toUpperCase()}_${Date.now()}`;
                // Crée la base de données
                const dbName = `entreprise_${nom.replace(/\s+/g, '_').toLowerCase()}_${Date.now()}`;
                yield SuperAdminService_1.SuperAdminService.createDatabase(dbName);
                // Crée le DSN
                const dsn = `mysql://root:ousmane00@localhost:3306/${dbName}`;
                // Ajoute au .env
                yield SuperAdminService_1.SuperAdminService.addToEnv(dbKey, dsn);
                // Lance les migrations
                yield SuperAdminService_1.SuperAdminService.runMigrations(dsn);
                // Crée l'entreprise dans la base globale
                const company = yield SuperAdminService_1.SuperAdminService.createCompanyRecord({
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
    static listCompanies(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const companies = yield SuperAdminService_1.SuperAdminService.listCompanies();
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
    static addUserToCompany(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { entrepriseId } = req.params;
                if (!entrepriseId) {
                    return res.status(StatusCode_1.HttpStatusCode.BAD_REQUEST).json({
                        success: false,
                        message: 'ID entreprise requis',
                    });
                }
                const result = AddUserSchema.safeParse(req.body);
                if (!result.success) {
                    return res.status(400).json({
                        success: false,
                        errors: result.error.issues,
                    });
                }
                const { nom, prenom, login, email, password, role } = result.data;
                // Vérifie si l'utilisateur existe déjà
                const existing = yield SuperAdminService_1.SuperAdminService.findUserByLogin(login);
                if (existing) {
                    return res.status(StatusCode_1.HttpStatusCode.BAD_REQUEST).json({
                        success: false,
                        message: 'Utilisateur déjà existant',
                    });
                }
                // Hash du mot de passe
                const hashedPassword = yield SuperAdminService_1.SuperAdminService.hashPassword(password);
                // Création de l'utilisateur
                const user = yield SuperAdminService_1.SuperAdminService.createUser({
                    nom,
                    prenom,
                    login,
                    email,
                    password: hashedPassword,
                    role: role,
                    entrepriseId: parseInt(entrepriseId),
                });
                res.json({
                    success: true,
                    message: 'Utilisateur ajouté avec succès',
                    user: {
                        id: user.id,
                        nom: user.nom,
                        prenom: user.prenom,
                        email: user.email,
                        role: user.role,
                    },
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
                const total = yield SuperAdminService_1.SuperAdminService.countNbCompanies();
                const actifs = yield SuperAdminService_1.SuperAdminService.countActifCompanies();
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
exports.SuperAdminController = SuperAdminController;
//# sourceMappingURL=SuperAdminController.js.map