import { BulletinsSalaire, PrismaClient } from "../../../prisma/generated/entreprise/index.js";
import { ErrorsMessagesFr } from "../../enum/ErrorsMessagesFr.js";
import { HttpStatusCode } from "../../enum/StatusCode.js";
import { Statut } from "../../../prisma/generated/entreprise/index.js";
import { NextFunction } from "express";

export class BulletinSalaireService {
    static async getAll(entreprisePrisma: PrismaClient, offset: number, limit: number, searchText: string, searchStatus: string,  sortBy: string, order: string, next: NextFunction){

        const where: any = {};
        try {
            if (searchText) {
                where.employe = {
                    OR: [
                    { nom: { contains: searchText } },
                    { prenom: { contains: searchText } },
                    { email: { contains: searchText } },
                    ],
                };
            }
    
            if (searchStatus) {
                where.employe = {
                    ...where.employe,
                    statut: searchStatus as Statut,
                };
            }
            const bulletinsSalaire = await entreprisePrisma.bulletinsSalaire.findMany({
                where,
                skip: offset,
                take: limit,
                orderBy:{
                    [sortBy]: order as "asc" | "desc"
                },
                include: {employe: true}
            })
            return bulletinsSalaire;
        } catch (error) {
            next(error);
        }
    }

    static async count(entreprisePrisma: PrismaClient, searchText: string, searchStatus: string): Promise<number> {
        const where: any = {};

            if (searchText) {
                where.employe = {
                    OR: [
                    { nom: { contains: searchText } },
                    { prenom: { contains: searchText } },
                    { email: { contains: searchText } },
                    ],
                };
            }
    
            if (searchStatus) {
                where.employe = {
                    ...where.employe,
                    statut: searchStatus as Statut,
                };
            }

        return await entreprisePrisma.bulletinsSalaire.count({ where });
    }



}