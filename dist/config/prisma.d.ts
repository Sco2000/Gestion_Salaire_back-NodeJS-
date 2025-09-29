import { PrismaClient as GlobalPrisma } from '../../prisma/generated/global/client';
import { PrismaClient as EntreprisePrisma } from '../../prisma/generated/entreprise/client';
declare const globalPrisma: GlobalPrisma<import("../../prisma/generated/global").Prisma.PrismaClientOptions, never, import("../../prisma/generated/global/runtime/library").DefaultArgs>;
export declare function createPrismaClientForEntreprise(url: string): EntreprisePrisma<{
    datasources: {
        db: {
            url: string;
        };
    };
}, never, import("../../prisma/generated/entreprise/runtime/library").DefaultArgs>;
export default globalPrisma;
//# sourceMappingURL=prisma.d.ts.map