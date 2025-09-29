import { Worker } from "bullmq";
import { Redis } from "ioredis";
import globalPrisma from "../../config/prisma";
import { createPrismaClientForEntreprise } from "../../config/prisma";
import { genererPayRun } from "../../utils";
import dotenv from 'dotenv'

dotenv.config();


const connection = new Redis({
  host: process.env.REDIS_HOST || "127.0.0.1",
  port: process.env.REDIS_PORT ? Number(process.env.REDIS_PORT) : 6379,
  maxRetriesPerRequest: null
});

export const worker = new Worker(
  "payRunQueue",
  async (job) => {
    const { entrepriseId, payRunId } = job.data;
    
    // 1️⃣ Récupérer le DSN de l'entreprise
    const entreprise = await globalPrisma.entreprises.findUnique({ where: { id: entrepriseId } });
    if (!entreprise) throw new Error(`Entreprise ${entrepriseId} non trouvée`);
    
    // 2️⃣ Créer le PrismaClient spécifique à l'entreprise
    const dsn = process.env[entreprise.dbKey] as string;
    const entreprisePrisma = createPrismaClientForEntreprise(dsn);
    
    // 3️⃣ Récupérer le PayRun
    
    const payRun = await entreprisePrisma.payRun.findUnique({ where: { id: payRunId } });
    if (!payRun) throw new Error(`PayRun ${payRunId} non trouvé`);
    console.log(payRun);
    

    // 4️⃣ Exécuter la logique métier : calculer salaires et créer bulletins
    await genererPayRun(entreprisePrisma, payRun.id);
  },
  { connection }
);
