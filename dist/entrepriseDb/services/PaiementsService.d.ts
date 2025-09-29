import { PrismaClient } from "../../../prisma/generated/entreprise/index.js";
import { NextFunction } from "express";
export declare class PaiementsService {
    static getAll(entreprisePrisma: PrismaClient, offset: number, limit: number, searchText: string, searchStatus: string, searchMode: string, searchPaiementStatut: string, sortBy: string, order: string, next: NextFunction): Promise<({
        bulletin: {
            id: number;
            mois: string;
            salaire_base: import("../../../prisma/generated/entreprise/runtime/library.js").Decimal | null;
            deductions: import("../../../prisma/generated/entreprise/runtime/library.js").Decimal;
            salaire_net: import("../../../prisma/generated/entreprise/runtime/library.js").Decimal;
            date_generation: Date;
            payRunId: number;
            employeId: number;
        };
    } & {
        id: number;
        montant: import("../../../prisma/generated/entreprise/runtime/library.js").Decimal;
        mode: import("../../../prisma/generated/entreprise/index.js").$Enums.ModePaiement;
        statut: import("../../../prisma/generated/entreprise/index.js").$Enums.StatutPaiement;
        reference: string | null;
        date_paiement: Date;
        bulletinId: number;
    })[] | undefined>;
    static count(entreprisePrisma: PrismaClient, searchText: string, searchStatus: string, searchMode: string, searchPaiementStatut: string): Promise<number>;
}
//# sourceMappingURL=PaiementsService.d.ts.map