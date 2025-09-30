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
const global_1 = require("../../prisma/generated/global");
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma = new global_1.PrismaClient();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log('🌱 Seeding database...');
        // --- 1. Devises ---
        const deviseFCFA = yield prisma.devises.create({
            data: { libelle: "FCFA" }
        });
        const deviseEUR = yield prisma.devises.create({
            data: { libelle: "EUR" }
        });
        // --- 2. Entreprises ---
        const entreprise1 = yield prisma.entreprises.create({
            data: {
                nom: "Orange SA",
                email: "orange@exemple.com",
                telephone: "770000001",
                dbKey: "DB_ENTREPRISE_ORANGE",
                date_creation: new Date("2024-01-01T09:00:00Z"), // 👈 Date forcée,
                Statut: global_1.Statut.ACTIF,
                deviseId: deviseFCFA.id,
            },
        });
        const entreprise2 = yield prisma.entreprises.create({
            data: {
                nom: "Free SA",
                email: "free@exemple.com",
                telephone: "770000002",
                dbKey: "DB_ENTREPRISE_FREE",
                Statut: global_1.Statut.ACTIF,
                date_creation: new Date("2025-02-01T09:00:00Z"),
                deviseId: deviseEUR.id,
            },
        });
        // --- 3. Utilisateurs ---
        const hashedPassword = yield bcrypt_1.default.hash("password123", 10);
        yield prisma.utilisateurs.createMany({
            data: [
                {
                    nom: "Marra",
                    prenom: "Fallou",
                    login: "superadmin",
                    email: "fallou@gmail.com",
                    password: hashedPassword,
                    role: global_1.Role.SUPER_ADMIN,
                    entrepriseId: null,
                },
                {
                    nom: "Marra",
                    prenom: "Ousmane",
                    login: "admin1",
                    email: "ousmane@gmail.com",
                    password: hashedPassword,
                    role: global_1.Role.ADMIN,
                    entrepriseId: entreprise1.id,
                },
                {
                    nom: "Admin",
                    prenom: "Entreprise2",
                    login: "admin2",
                    password: hashedPassword,
                    email: "falloundiaye@gmail.com",
                    role: global_1.Role.ADMIN,
                    entrepriseId: entreprise2.id,
                },
            ],
            skipDuplicates: true,
        });
        console.log('✅ Seeding terminé !');
    });
}
main()
    .then(() => __awaiter(void 0, void 0, void 0, function* () {
    yield prisma.$disconnect();
}))
    .catch((e) => __awaiter(void 0, void 0, void 0, function* () {
    console.error(e);
    yield prisma.$disconnect();
    process.exit(1);
}));
//# sourceMappingURL=globalSeeds.js.map