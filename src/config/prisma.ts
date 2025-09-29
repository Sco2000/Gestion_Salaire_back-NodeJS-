import {PrismaClient as GlobalPrisma} from '../../prisma/generated/global/client'
import { PrismaClient as EntreprisePrisma } from '../../prisma/generated/entreprise/client';

const globalPrisma = new GlobalPrisma();

export function createPrismaClientForEntreprise(url: string) {
  return new EntreprisePrisma({
    datasources: {
      db: { url }
    }
  });
}

export default globalPrisma;
