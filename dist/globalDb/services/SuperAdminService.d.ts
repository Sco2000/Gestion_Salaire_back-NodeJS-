export declare class SuperAdminService {
    static findCompanyByEmail(email: string): Promise<{
        id: number;
        email: string;
        nom: string;
        telephone: string;
        dbKey: string;
        Statut: import("../../../prisma/generated/global").$Enums.Statut;
        deviseId: number;
    } | null>;
    static createCompanyRecord(data: any): Promise<{
        id: number;
        email: string;
        nom: string;
        telephone: string;
        dbKey: string;
        Statut: import("../../../prisma/generated/global").$Enums.Statut;
        deviseId: number;
    }>;
    static listCompanies(): Promise<({
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
        deviseId: number;
    })[]>;
    static findUserByLogin(login: string): Promise<{
        login: string;
        password: string;
        id: number;
        email: string;
        nom: string;
        prenom: string;
        role: import("../../../prisma/generated/global").$Enums.Role;
        entrepriseId: number | null;
    } | null>;
    static createUser(data: any): Promise<{
        login: string;
        password: string;
        id: number;
        email: string;
        nom: string;
        prenom: string;
        role: import("../../../prisma/generated/global").$Enums.Role;
        entrepriseId: number | null;
    }>;
    static hashPassword(password: string): Promise<string>;
    static createDatabase(dbName: string): Promise<void>;
    static addToEnv(key: string, value: string): Promise<void>;
    static runMigrations(dsn: string): Promise<void>;
    static countNbCompanies(): Promise<number>;
    static countActifCompanies(): Promise<number>;
}
//# sourceMappingURL=SuperAdminService.d.ts.map