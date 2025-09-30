import { Request, Response, NextFunction } from 'express';
import { ReponseFormatter } from '../../middlewares/ReponseFormatter.js';
import { SuccessCodes } from '../../enum/SuccesCodesFr.js';
import { BulletinSalaireService } from '../services/BulletinSalaireService.js';

export class BulletinSalaireController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        const entreprisePrisma = req.entreprisePrisma
        
        if (!entreprisePrisma) {
            return res.status(500).json({ error: "Prisma client non initialisé" });
        }

        const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1;
        const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 6;
        const offset = (page - 1) * limit;
        const searchText = (req.query.search as string) || "";
        const searchStatus = (req.query.status as string) || "";
        const searchDate = req.query.date ? new Date(req.query.date as string) : null;
        const sortBy = (req.query.sortBy as string) || "date_generation";
        const ordr = (req.query.order as string) === "desc"? "desc" : "asc";

        const bulletinsSalaire = await BulletinSalaireService.getAll(entreprisePrisma, offset, limit, searchText, searchStatus, searchDate, sortBy, ordr, next)
        const total = await BulletinSalaireService.count(entreprisePrisma, searchText, searchStatus);

        const totalPage = Math.ceil(total / limit);
        const data = { page, limit, total, totalPage, bulletinsSalaire };

        return ReponseFormatter.success(res, data, SuccessCodes.PayRun_ALL_FETCHED)    
    }

    static async getCurrentMonth(req: Request, res: Response, next: NextFunction) {
        const entreprisePrisma = req.entreprisePrisma;
        if (!entreprisePrisma) {
            return res.status(500).json({ error: "Prisma client non initialisé" });
        }
        const bulletinsSalaire = await BulletinSalaireService.getByCurrentMonth(entreprisePrisma, next);
        return ReponseFormatter.success(res, bulletinsSalaire, SuccessCodes.PayRun_ALL_FETCHED);
    }
}