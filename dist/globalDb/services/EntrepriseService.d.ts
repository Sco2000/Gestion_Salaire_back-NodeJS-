import { NextFunction } from 'express';
export declare class EntrepriseService {
    static findCompanyByEmail(email: string): Promise<{
        id: number;
        email: string;
        nom: string;
        telephone: string;
        dbKey: string;
        Statut: import("../../../prisma/generated/global").$Enums.Statut;
        date_creation: Date | null;
        deviseId: number;
    } | null>;
    static createCompanyRecord(data: any): Promise<{
        id: number;
        email: string;
        nom: string;
        telephone: string;
        dbKey: string;
        Statut: import("../../../prisma/generated/global").$Enums.Statut;
        date_creation: Date | null;
        deviseId: number;
    }>;
    static listCompanies(offset: number, limit: number, searchText: string, searchStatus: string, sortBy: string, order: string, next: NextFunction): Promise<({
        Utilisateurs: {
            id: number;
            email: string;
            nom: string;
            prenom: string;
            role: import("../../../prisma/generated/global").$Enums.Role;
        }[];
        devises: {
            id: number;
            libelle: string;
        };
    } & {
        id: number;
        email: string;
        nom: string;
        telephone: string;
        dbKey: string;
        Statut: import("../../../prisma/generated/global").$Enums.Statut;
        date_creation: Date | null;
        deviseId: number;
    })[] | undefined>;
    static createDatabase(dbName: string): Promise<void>;
    static addToEnv(key: string, value: string): Promise<void>;
    static runMigrations(dsn: string): Promise<void>;
    static countNbCompanies(): Promise<number>;
    static countActifCompanies(): Promise<number>;
}
//# sourceMappingURL=EntrepriseService.d.ts.map