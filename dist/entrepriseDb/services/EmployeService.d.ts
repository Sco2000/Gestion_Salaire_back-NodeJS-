import { Employes, PrismaClient } from "../../../prisma/generated/entreprise/index.js";
export declare class EmployeService {
    static getAll(entreprisePrisma: PrismaClient, offset: number, limit: number, searchText: string, searchStatus: string, sortBy: string, order: string): Promise<{
        id: number;
        email: string;
        nom: string;
        prenom: string;
        role: import("../../../prisma/generated/entreprise/index.js").$Enums.Role;
        telephone: string;
        poste: string;
        date_embauche: Date;
        date_arret: Date | null;
        typeContrat: import("../../../prisma/generated/entreprise/index.js").$Enums.TypeContrat;
        statut: import("../../../prisma/generated/entreprise/index.js").$Enums.Statut;
    }[]>;
    static count(entreprisePrisma: PrismaClient, searchText: string, searchStatus: string): Promise<number>;
    static update(entreprisePrisma: PrismaClient, employeId: number, data: Partial<Employes>): Promise<Employes>;
}
//# sourceMappingURL=EmployeService.d.ts.map