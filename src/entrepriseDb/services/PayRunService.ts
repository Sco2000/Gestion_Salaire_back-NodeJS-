import { PayRun, PrismaClient, TypePayRun } from "../../../prisma/generated/entreprise/index.js";
import { ErrorsMessagesFr } from "../../enum/ErrorsMessagesFr.js";
import { HttpStatusCode } from "../../enum/StatusCode.js";
import { Statut } from "../../../prisma/generated/entreprise/index.js";
import { NextFunction } from "express";
import { schedulePayRunCalculation } from "./jobs/payRunScheduler.js";

export class PayRunService {

    static async getAll(entreprisePrisma: PrismaClient, offset: number, limit: number, searchStartDate: Date|null, searchEndDate: Date|null, searchType: string,  sortBy: string, order: string, next: NextFunction){

        const where: any = {};
        try {
            if (searchStartDate) {
                where.periodeDebut =  { gte: searchStartDate }
            }

            if (searchEndDate) {
                where.periodeFin =  { lte: searchEndDate }
            }

            if (searchType) {
                where.statut = searchType 
            }
            const payRun = await entreprisePrisma.payRun.findMany({
                where,
                skip: offset,
                take: limit,
                orderBy:{
                    [sortBy]: order as "asc" | "desc"
                },
                include: {bulletins: true}
    
            })
            return payRun;
        } catch (error) {
            next(error);
        }
    }

    static async count(entreprisePrisma: PrismaClient, searchStartDate: Date|null, searchEndDate: Date|null, searchType: string): Promise<number> {
        const where: any = {};

            if (searchStartDate) {
                where.periodeDebut =  { gte: searchStartDate }
            }

            if (searchEndDate) {
                where.periodeFin =  { lte: searchEndDate }
            }
    
            if (searchType) {
                where.statut = searchType 
            }

        return await entreprisePrisma.payRun.count({ where });
    }

    static async create(entreprisePrisma: PrismaClient, data: Omit<PayRun, "id" | "statut" | "createdAt" |  "updatedAt">, entrepriseId: number){
        const payRun = await entreprisePrisma.payRun.create({data});
        await schedulePayRunCalculation(payRun, entrepriseId);
        return payRun;

    }

    static async calculerJoursTravailles(
        entreprisePrisma: PrismaClient,
        employeId: number,
        debut: Date,
        fin: Date
    ): Promise<number> {
        // Compte le nombre de jours distincts où l'employé a pointé
        const jours = await entreprisePrisma.pointages.groupBy({
            by: ['date'],
            where: {
                employeId,
                date: { gte: debut, lte: fin }
            }
        });
        return jours.length;
    }

    static async calculerHeuresTravailles(
        entreprisePrisma: PrismaClient,
        employeId: number,
        debut: Date,
        fin: Date
    ): Promise<number> {
        // Additionne les heures travaillées sur la période
        const pointages = await entreprisePrisma.pointages.findMany({
            where: {
                employeId,
                date: { gte: debut, lte: fin }
            }
        });

        let totalHeures = 0;
        for (const p of pointages) {
            const entree = new Date(p.entree);
            const sortie = new Date(p.sortie);
            const heures = (sortie.getTime() - entree.getTime()) / (1000 * 60 * 60);
            totalHeures += heures;
        }
        return totalHeures;
    }
}