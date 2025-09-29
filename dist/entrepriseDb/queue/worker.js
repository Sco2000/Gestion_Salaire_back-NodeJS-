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
exports.worker = void 0;
const bullmq_1 = require("bullmq");
const ioredis_1 = require("ioredis");
const prisma_1 = __importDefault(require("../../config/prisma"));
const prisma_2 = require("../../config/prisma");
const utils_1 = require("../../utils");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const connection = new ioredis_1.Redis({
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 6379,
    maxRetriesPerRequest: null
});
exports.worker = new bullmq_1.Worker("payRunQueue", (job) => __awaiter(void 0, void 0, void 0, function* () {
    const { entrepriseId, payRunId } = job.data;
    // 1️⃣ Récupérer le DSN de l'entreprise
    const entreprise = yield prisma_1.default.entreprises.findUnique({ where: { id: entrepriseId } });
    if (!entreprise)
        throw new Error(`Entreprise ${entrepriseId} non trouvée`);
    // 2️⃣ Créer le PrismaClient spécifique à l'entreprise
    const dsn = process.env[entreprise.dbKey];
    const entreprisePrisma = (0, prisma_2.createPrismaClientForEntreprise)(dsn);
    // 3️⃣ Récupérer le PayRun
    const payRun = yield entreprisePrisma.payRun.findUnique({ where: { id: payRunId } });
    if (!payRun)
        throw new Error(`PayRun ${payRunId} non trouvé`);
    console.log(payRun);
    // 4️⃣ Exécuter la logique métier : calculer salaires et créer bulletins
    yield (0, utils_1.genererPayRun)(entreprisePrisma, payRun.id);
}), { connection });
//# sourceMappingURL=worker.js.map