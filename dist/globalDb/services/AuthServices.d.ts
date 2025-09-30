import { UserInput } from "../models/UserModel";
export declare class AuthService {
    static selectUserByLogin(data: UserInput): Promise<{
        entreprise: null;
        userConnected: {
            login: string;
            password: string;
            id: number;
            email: string;
            nom: string;
            prenom: string;
            role: import("../../../prisma/generated/global").$Enums.Role;
            entrepriseId: number | null;
        };
    } | {
        entreprise: ({
            devises: {
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
        }) | null;
        userConnected: {
            id: number;
            prenom: string;
            nom: string;
            email: string;
            role: "ADMIN" | "CAISSIER";
            login: string;
        };
    }>;
    static verifyUSerByLogin(data: {
        login: string;
        role: string;
    }): Promise<{
        entreprises: {
            dbKey: string;
            Statut: import("../../../prisma/generated/global").$Enums.Statut;
        } | null;
    } & {
        login: string;
        password: string;
        id: number;
        email: string;
        nom: string;
        prenom: string;
        role: import("../../../prisma/generated/global").$Enums.Role;
        entrepriseId: number | null;
    }>;
}
//# sourceMappingURL=AuthServices.d.ts.map