export declare class UserService {
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
}
//# sourceMappingURL=UserService.d.ts.map