import { UserInput } from "../models/UserModel";
export declare class AuthService {
    static selectUserByLogin(data: UserInput): Promise<{
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
            deviseId: number;
        }) | null;
        userConnected: {
            id: number;
            prenom: string;
            nom: string;
            email: string;
            role: import("../../../prisma/generated/global").$Enums.Role;
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
        };
    } & {
        login: string;
        password: string;
        id: number;
        email: string;
        nom: string;
        prenom: string;
        role: import("../../../prisma/generated/global").$Enums.Role;
        entrepriseId: number;
    }>;
}
//# sourceMappingURL=AuthServices.d.ts.map