import { Request, Response, NextFunction } from 'express';
import { ErrorsMessagesFr } from "../../enum/ErrorsMessagesFr.js";
import { HttpStatusCode } from "../../enum/StatusCode.js";
import { EmployeService } from '../services/EmployeService.js';
import { PrismaClient } from '../../../prisma/generated/entreprise/index.js';
import { ReponseFormatter } from '../../middlewares/ReponseFormatter.js';
import { SuccessCodes } from '../../enum/SuccesCodesFr.js';
import { Statut } from '../../../prisma/generated/entreprise/index.js';

export class EmployeController {
    static async getAll(req: Request, res: Response, next: NextFunction){
        const entreprisePrisma = req.entreprisePrisma
        
        if (!entreprisePrisma) {
            return res.status(500).json({ error: "Prisma client non initialisé" });
        }

        const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1;
        const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 6;
        const offset = (page - 1) * limit;
        const searchText = (req.query.search as string) || "";
        const searchStatus = (req.query.status as string) || "";
        const sortBy = (req.query.sortBy as string) || "nom";
        const ordr = (req.query.order as string) === "desc"? "desc" : "asc";

        const employes = await EmployeService.getAll(entreprisePrisma, offset, limit, searchText, searchStatus,  sortBy, ordr)
        const total = await EmployeService.count(entreprisePrisma, searchText, searchStatus);

        const totalPage = Math.ceil(total / limit);
        const data = { page, limit, total, totalPage, employes };

        return ReponseFormatter.success(res, data, SuccessCodes.Employer_ALL_FETCHED)    
    }

    static async markActif(req: Request, res: Response, next: NextFunction){
        const entreprisePrisma = req.entreprisePrisma
        
        if (!entreprisePrisma) {
            return res.status(500).json({ error: "Prisma client non initialisé" });
        }

        try {
            const id = Number (req.params.id);
            const data = {statut: Statut.ACTIF}
            const updatedStatus = await EmployeService.update(entreprisePrisma, id, data);
            return ReponseFormatter.success(res, updatedStatus, SuccessCodes.Employer_MARKED_ACTIVE);
        } catch (err) {
            next(err)
        }
    }

    static async markInactif(req: Request, res: Response, next: NextFunction){
        const entreprisePrisma = req.entreprisePrisma
        
        if (!entreprisePrisma) {
            return res.status(500).json({ error: "Prisma client non initialisé" });
        }

        try {
            const id = Number (req.params.id);
            const data = {statut: Statut.INACTIF}
            const updatedStatus = await EmployeService.update(entreprisePrisma, id, data);
            return ReponseFormatter.success(res, updatedStatus, SuccessCodes.Employer_MARKED_INACTIVE);
        } catch (err) {
            next(err)
        }
    }
    
}