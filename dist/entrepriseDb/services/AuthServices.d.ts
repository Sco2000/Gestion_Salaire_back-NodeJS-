export declare class AuthService {
    static selectUserByLogin(login: string): Promise<{
        id: number;
        nom: string;
        prenom: string;
        email: string;
        telephone: string;
        dbName: string;
        dbSecretId: number;
        Statut: import("../../../prisma/generated/global").$Enums.Statut;
        deviseId: number;
    } | null>;
}
//# sourceMappingURL=AuthServices.d.ts.map