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
exports.EntrepriseService = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
const promise_1 = __importDefault(require("mysql2/promise"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const util_1 = require("util");
const execAsync = (0, util_1.promisify)(child_process_1.exec);
class EntrepriseService {
    static findCompanyByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.entreprises.findUnique({ where: { email } });
        });
    }
    static createCompanyRecord(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.entreprises.create({ data });
        });
    }
    static listCompanies(offset, limit, searchText, searchStatus, sortBy, order, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
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
                return prisma_1.default.entreprises.findMany({
                    where,
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
            fs_1.default.appendFileSync(envPath, `\n${key}="${value}"`);
        });
    }
    static runMigrations(dsn) {
        return __awaiter(this, void 0, void 0, function* () {
            const schemaPath = path_1.default.join(process.cwd(), 'prisma', 'schema.entreprise.prisma');
            const migrationsPath = path_1.default.join(process.cwd(), 'prisma', 'migrations');
            if (!fs_1.default.existsSync(migrationsPath) || fs_1.default.readdirSync(migrationsPath).length === 0) {
                throw new Error("Aucune migration trouvée. Veuillez générer la migration initiale avec 'npx prisma migrate dev --schema=prisma/schema.entreprise.prisma --name init'");
            }
            const deployCommand = `npx prisma migrate deploy --schema=${schemaPath}`;
            const env = Object.assign(Object.assign({}, process.env), { DATABASE_URL: dsn });
            yield execAsync(deployCommand, { env });
        });
    }
    static countNbCompanies() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.entreprises.count();
        });
    }
    static countActifCompanies() {
        return __awaiter(this, void 0, void 0, function* () {
            return prisma_1.default.entreprises.count({
                where: { Statut: "ACTIF" }
            });
        });
    }
}
exports.EntrepriseService = EntrepriseService;
//# sourceMappingURL=EntrepriseService.js.map