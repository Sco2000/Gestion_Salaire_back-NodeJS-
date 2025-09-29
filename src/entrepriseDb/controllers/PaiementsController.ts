import { Request, Response, NextFunction } from 'express';
import { PaiementsService } from '../services/PaiementsService.js';
import { ReponseFormatter } from '../../middlewares/ReponseFormatter.js';
import { SuccessCodes } from '../../enum/SuccesCodesFr.js';

export class PaiementsController {
        static async getAll(req: Request, res: Response, next: NextFunction){
        const entreprisePrisma = req.entreprisePrisma
        
        if (!entreprisePrisma) {
            return res.status(500).json({ error: "Prisma client non initialisé" });
        }

        try {
            const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1;
            const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 6;
            const offset = (page - 1) * limit;
            const searchText = (req.query.search as string) || "";
            const searchStatus = (req.query.status as string) || "";
            const searchMode = (req.query.mode as string) || "";
            const searchPaiementStatut = (req.query.paiement as string) || "";
            const sortBy = (req.query.sortBy as string) || "statut";
            const ordr = (req.query.order as string) === "desc"? "desc" : "asc";
    
            const employes = await PaiementsService.getAll(entreprisePrisma, offset, limit, searchText, searchStatus, searchMode, searchPaiementStatut, sortBy, ordr, next)
            const total = await PaiementsService.count(entreprisePrisma, searchText, searchStatus, searchMode, searchPaiementStatut,);
    
            const totalPage = Math.ceil(total / limit);
            const data = { page, limit, total, totalPage, employes };
            return ReponseFormatter.success(res, data, SuccessCodes.Paiements_ALL_FETCHED)    
        } catch (error) {
            next(error)
        }

    }
}