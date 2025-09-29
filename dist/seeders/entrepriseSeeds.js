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
const entreprise_1 = require("../../prisma/generated/entreprise");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const prisma = new entreprise_1.PrismaClient({
    datasources: {
        db: { url: process.env.DSN_ENTREPRISE_ORANGE },
    },
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Début du seeding des pointages...");
        // Récupérer les employés
        const employes = yield prisma.employes.findMany();
        console.log(employes);
        const pointagesData = [];
        // Générer des pointages pour chaque employé pour le mois d'août 2025
        for (const employe of employes) {
            for (let day = 1; day <= 20; day++) { // exemple : 20 jours travaillés
                const date = new Date(`2025-08-${day.toString().padStart(2, "0")}T00:00:00Z`);
                // Entrée à 9h00, sortie à 17h00
                const entree = new Date(date);
                entree.setHours(9, 0, 0);
                const sortie = new Date(date);
                sortie.setHours(17, 0, 0);
                pointagesData.push({
                    employeId: employe.id,
                    date,
                    entree,
                    sortie,
                });
            }
        }
        // Insérer en base
        yield prisma.pointages.createMany({
            data: pointagesData,
            skipDuplicates: true,
        });
        console.log("Seeding des pointages terminé ✅");
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
//# sourceMappingURL=entrepriseSeeds.js.map