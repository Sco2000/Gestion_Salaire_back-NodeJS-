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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperAdminController = void 0;
const zod_1 = require("zod");
const prisma_1 = __importDefault(require("../../config/prisma"));
const ErrorsMessagesFr_1 = require("../../enum/ErrorsMessagesFr");
const StatusCode_1 = require("../../enum/StatusCode");
const global_1 = require("../../../prisma/generated/global");
const bcrypt_1 = __importDefault(require("bcrypt"));
const promise_1 = __importDefault(require("mysql2/promise"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const util_1 = require("util");
const execAsync = (0, util_1.promisify)(child_process_1.exec);
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
                // Check if company already exists
                const existing = yield prisma_1.default.entreprises.findUnique({
                    where: { email },
                });
                if (existing) {
                    return res.status(StatusCode_1.HttpStatusCode.BAD_REQUEST).json({
                        success: false,
                        message: ErrorsMessagesFr_1.ErrorsMessagesFr.USER_ALREADY_EXISTS, // reuse or create new
                    });
                }
                // Generate unique dbKey
                const dbKey = `DSN_ENTREPRISE_${nom.replace(/\s+/g, '_').toUpperCase()}_${Date.now()}`;
                // Create database
                const dbName = `entreprise_${nom.replace(/\s+/g, '_').toLowerCase()}_${Date.now()}`;
                yield SuperAdminController.createDatabase(dbName);
                // Create DSN
                const dsn = `mysql://root:ousmane00@localhost:3306/${dbName}`;
                // Add to .env
                yield SuperAdminController.addToEnv(dbKey, dsn);
                // Run migrations
                yield SuperAdminController.runMigrations(dsn);
                // Create company in global DB
                const company = yield prisma_1.default.entreprises.create({
                    data: {
                        nom,
                        email,
                        telephone,
                        dbKey,
                        deviseId,
                        Statut: global_1.Statut.ACTIF,
                    },
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
                const companies = yield prisma_1.default.entreprises.findMany({
                    include: {
                        devises: true,
                        Utilisateurs: {
                            select: {
                                id: true,
                                nom: true,
                                prenom: true,
                                email: true,
                                role: true,
                            },
                        },
                    },
                });
                console.log(companies);
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
                // Check if user exists
                const existing = yield prisma_1.default.utilisateurs.findUnique({
                    where: { login },
                });
                if (existing) {
                    return res.status(StatusCode_1.HttpStatusCode.BAD_REQUEST).json({
                        success: false,
                        message: 'Utilisateur déjà existant',
                    });
                }
                // Hash password
                const hashedPassword = yield bcrypt_1.default.hash(password, 10);
                // Create user
                const user = yield prisma_1.default.utilisateurs.create({
                    data: {
                        nom,
                        prenom,
                        login,
                        email,
                        password: hashedPassword,
                        role: role,
                        entrepriseId: parseInt(entrepriseId),
                    },
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
    static createDatabase(dbName) {
        return __awaiter(this, void 0, void 0, function* () {
            const connection = yield promise_1.default.createConnection({
                host: 'localhost',
                user: 'root',
                password: 'ousmane00',
            });
            yield connection.execute(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
            yield connection.end();
        });
    }
    static addToEnv(key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const envPath = path_1.default.join(process.cwd(), '.env');
            const envContent = fs_1.default.readFileSync(envPath, 'utf-8');
            const newLine = `\n${key}="${value}"`;
            fs_1.default.appendFileSync(envPath, newLine);
        });
    }
    static runMigrations(dsn) {
        return __awaiter(this, void 0, void 0, function* () {
            const schemaPath = path_1.default.join(process.cwd(), 'prisma', 'schema.entreprise.prisma');
            const migrationsPath = path_1.default.join(process.cwd(), 'prisma', 'migrations');
            // Vérifie si le dossier migrations existe et n'est pas vide
            if (!fs_1.default.existsSync(migrationsPath) || fs_1.default.readdirSync(migrationsPath).length === 0) {
                // Génère la migration si elle n'existe pas
                const generateCommand = `npx prisma migrate dev --schema=prisma/schema.entreprise.prisma --name init --skip-seed`;
                yield execAsync(generateCommand);
            }
            // Déploie la migration sur la nouvelle base
            const deployCommand = `npx prisma migrate deploy --schema=${schemaPath}`;
            const env = Object.assign(Object.assign({}, process.env), { DATABASE_URL: dsn });
            yield execAsync(deployCommand, { env });
        });
    }
}
exports.SuperAdminController = SuperAdminController;
//# sourceMappingURL=SuperAdminController.js.map