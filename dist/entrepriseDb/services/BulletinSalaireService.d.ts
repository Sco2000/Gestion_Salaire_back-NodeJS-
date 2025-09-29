import { PrismaClient } from "../../../prisma/generated/entreprise/index.js";
import { NextFunction } from "express";
export declare class BulletinSalaireService {
    static getAll(entreprisePrisma: PrismaClient, offset: number, limit: number, searchText: string, searchStatus: string, sortBy: string, order: string, next: NextFunction): Promise<({
        employe: {
            id: number;
            nom: string;
            prenom: string;
            email: string;
            telephone: string;
            poste: string;
            date_embauche: Date;
            date_arret: Date | null;
            typeContrat: import("../../../prisma/generated/entreprise/index.js").$Enums.TypeContrat;
            role: import("../../../prisma/generated/entreprise/index.js").$Enums.Role;
            statut: import("../../../prisma/generated/entreprise/index.js").$Enums.Statut;
        };
    } & {
        id: number;
        mois: string;
        salaire_base: import("../../../prisma/generated/entreprise/runtime/library.js").Decimal | null;
        deductions: import("../../../prisma/generated/entreprise/runtime/library.js").Decimal;
        salaire_net: import("../../../prisma/generated/entreprise/runtime/library.js").Decimal;
        date_generation: Date;
        payRunId: number;
        employeId: number;
    })[] | undefined>;
    static count(entreprisePrisma: PrismaClient, searchText: string, searchStatus: string): Promise<number>;
}
//# sourceMappingURL=BulletinSalaireService.d.ts.map