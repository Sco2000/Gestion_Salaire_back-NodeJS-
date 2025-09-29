import { PrismaClient as EntreprisePrisma } from '../prisma/generated/entreprise/client';
export declare function validatePayRunPeriod(type: string, debut: Date, fin: Date): void;
export declare function genererPayRun(entreprisePrisma: EntreprisePrisma, payRunId: number): Promise<void>;
//# sourceMappingURL=utils.d.ts.map