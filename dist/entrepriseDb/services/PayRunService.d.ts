import { PayRun, PrismaClient } from "../../../prisma/generated/entreprise/index.js";
import { NextFunction } from "express";
export declare class PayRunService {
    static getAll(entreprisePrisma: PrismaClient, offset: number, limit: number, searchStartDate: Date | null, searchEndDate: Date | null, searchType: string, sortBy: string, order: string, next: NextFunction): Promise<({
        bulletins: {
            id: number;
            mois: string;
            salaire_base: import("../../../prisma/generated/entreprise/runtime/library.js").Decimal | null;
            deductions: import("../../../prisma/generated/entreprise/runtime/library.js").Decimal;
            salaire_net: import("../../../prisma/generated/entreprise/runtime/library.js").Decimal;
            date_generation: Date;
            payRunId: number;
            employeId: number;
        }[];
    } & {
        id: number;
        statut: import("../../../prisma/generated/entreprise/index.js").$Enums.PayRunStatut;
        periodeDebut: Date;
        periodeFin: Date;
        typePayRun: import("../../../prisma/generated/entreprise/index.js").$Enums.TypePayRun;
        createdAt: Date;
        updatedAt: Date;
    })[] | undefined>;
    static count(entreprisePrisma: PrismaClient, searchStartDate: Date | null, searchEndDate: Date | null, searchType: string): Promise<number>;
    static create(entreprisePrisma: PrismaClient, data: Omit<PayRun, "id" | "statut" | "createdAt" | "updatedAt">, entrepriseId: number): Promise<{
        id: number;
        statut: import("../../../prisma/generated/entreprise/index.js").$Enums.PayRunStatut;
        periodeDebut: Date;
        periodeFin: Date;
        typePayRun: import("../../../prisma/generated/entreprise/index.js").$Enums.TypePayRun;
        createdAt: Date;
        updatedAt: Date;
    }>;
    static calculerJoursTravailles(entreprisePrisma: PrismaClient, employeId: number, debut: Date, fin: Date): Promise<number>;
    static calculerHeuresTravailles(entreprisePrisma: PrismaClient, employeId: number, debut: Date, fin: Date): Promise<number>;
}
//# sourceMappingURL=PayRunService.d.ts.map