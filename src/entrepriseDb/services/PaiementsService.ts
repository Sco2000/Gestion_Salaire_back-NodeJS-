import { PrismaClient, StatutPaiement, ModePaiement, Statut } from "../../../prisma/generated/entreprise/index.js";
import { ErrorsMessagesFr } from "../../enum/ErrorsMessagesFr.js";
import { HttpStatusCode } from "../../enum/StatusCode.js";
import { NextFunction } from "express";

export class PaiementsService {
    static async getAll(entreprisePrisma: PrismaClient, offset: number, limit: number, searchText: string, searchStatus: string, searchMode: string, searchPaiementStatut: string, sortBy: string, order: string, next: NextFunction) {

        const where: any = {};
        try {
            // Filtre sur le paiement
            if (searchMode) {
                where.mode = searchMode as ModePaiement;
            }
            if (searchPaiementStatut) {
                where.statut = searchPaiementStatut as StatutPaiement;
            }

            // Filtre sur l'employé (via le bulletin)
            if (searchText || searchStatus) {
                where.bulletin = {
                    employe: {}
                };
                if (searchText) {
                    where.bulletin.employe.OR = [
                        { nom: { contains: searchText } },
                        { prenom: { contains: searchText } },
                        { email: { contains: searchText } }
                    ];
                }
                if (searchStatus) {
                    where.bulletin.employe.statut = searchStatus as Statut;
                }
            }

            const paiements = await entreprisePrisma.paiement.findMany({
                where,
                skip: offset,
                take: limit,
                orderBy: {
                    [sortBy]: order as "asc" | "desc"
                },
                include: { bulletin: true }
            })
            return paiements;
        } catch (error) {
            next(error);
        }
    }

    static async count(entreprisePrisma: PrismaClient, searchText: string, searchStatus: string,  searchMode: string, searchPaiementStatut: string,): Promise<number> {
        const where: any = {};

        if (searchMode) {
            where.mode = searchMode as ModePaiement;
        }
        if (searchPaiementStatut) {
            where.statut = searchPaiementStatut as StatutPaiement;
        }
        if (searchText || searchStatus) {
            where.bulletin = {
                employe: {}
            };
            if (searchText) {
                where.bulletin.employe.OR = [
                    { nom: { contains: searchText } },
                    { prenom: { contains: searchText } },
                    { email: { contains: searchText } }
                ];
            }
            if (searchStatus) {
                where.bulletin.employe.statut = searchStatus as Statut;
            }
        }

        return await entreprisePrisma.paiement.count({ where });
    }
}