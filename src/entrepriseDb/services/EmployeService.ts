import { Employes, PrismaClient } from "../../../prisma/generated/entreprise/index.js";
import { ErrorsMessagesFr } from "../../enum/ErrorsMessagesFr.js";
import { HttpStatusCode } from "../../enum/StatusCode.js";
import { Statut } from "../../../prisma/generated/entreprise/index.js";

export class EmployeService {
    static async getAll(entreprisePrisma: PrismaClient, offset: number, limit: number, searchText: string, searchStatus: string,  sortBy: string, order: string){
        const where: any = {};
        if (searchText) {
            where.OR = [
                { nom: { contains: searchText } },
                { prenom: { contains: searchText } },
                { email: { contains: searchText } },
            ];
        }

        if (searchStatus) {
        where.statut = searchStatus as Statut;
        }

        const employes = await entreprisePrisma.employes.findMany({
            skip: offset,
            take: limit,
            where,
            orderBy: {
                [sortBy]: order as "asc" | "desc",
            },
        });
        if (!employes) throw { status: HttpStatusCode.BAD_REQUEST, message: ErrorsMessagesFr.INCORRECT_CREDENTIALS };
        return employes;
    }

    static async count(entreprisePrisma: PrismaClient, searchText: string, searchStatus: string): Promise<number> {
        const where: any = {};

        if (searchText) {
            where.OR = [
            { nom: { contains: searchText } },
            { prenom: { contains: searchText } },
            { email: { contains: searchText } },
            ];
        }

        if (searchStatus) {
            where.etat = searchStatus as Statut;
        }

        return await entreprisePrisma.employes.count({ where });
    }

    static async update(entreprisePrisma: PrismaClient, employeId: number, data: Partial<Employes>): Promise<Employes> {
        const OMtask = await entreprisePrisma.employes.findUnique({ where: { id: employeId } });
        if (!OMtask) throw {status: HttpStatusCode.NOT_FOUND, message: ErrorsMessagesFr.EMPLOYE_INTROUVABLE};
        const employes = await entreprisePrisma.employes.update({where: {id: employeId}, data})
        return employes
    }
}