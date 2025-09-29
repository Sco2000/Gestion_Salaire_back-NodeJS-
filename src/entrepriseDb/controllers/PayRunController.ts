import { Request, Response, NextFunction } from 'express';
import { ReponseFormatter } from '../../middlewares/ReponseFormatter.js';
import { SuccessCodes } from '../../enum/SuccesCodesFr.js';
import { PayRunService } from '../services/PayRunService.js';
import { PayRunSchema } from '../models/payRunModel.js';
import { TypePayRun } from '../../../prisma/generated/entreprise/index.js';
import { validatePayRunPeriod } from '../../utils.js';

export class PayRunController {
    static async getAll(req: Request, res: Response, next: NextFunction) {
        const entreprisePrisma = req.entreprisePrisma
        
        if (!entreprisePrisma) {
            return res.status(500).json({ error: "Prisma client non initialisé" });
        }

        const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1;
        const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 6;
        const offset = (page - 1) * limit;
        const searchStartDate = req.query.StartDate ? new Date(req.query.StartDate as string) : null;
        const searchEndDate = req.query.EndDate ? new Date(req.query.EndDate as string) : null;
        const searchType = (req.query.type as string) || "";
        const sortBy = (req.query.sortBy as string) || "typePayRun";
        const ordr = (req.query.order as string) === "desc"? "desc" : "asc";

        const payRun = await PayRunService.getAll(entreprisePrisma, offset, limit, searchStartDate, searchEndDate, searchType,  sortBy, ordr, next)
        const total = await PayRunService.count(entreprisePrisma, searchStartDate, searchEndDate, searchType);

        const totalPage = Math.ceil(total / limit);
        const data = { page, limit, total, totalPage, payRun };

        return ReponseFormatter.success(res, data, SuccessCodes.PayRun_ALL_FETCHED)    
    }

    static async create(req: Request, res: Response, next: NextFunction) {
        const entreprisePrisma = req.entreprisePrisma
        
        if (!entreprisePrisma) {
            return res.status(500).json({ error: "Prisma client non initialisé" });
        }
        try {
            const result = PayRunSchema.safeParse(req.body);
            if (!result.success) {
                return res.status(400).json({
                success: false,
                errors: result.error.issues, 
                });
            }

            validatePayRunPeriod(result.data.typePayRun, result.data.periodeDebut, result.data.periodeFin);
            const data = {periodeDebut: result.data.periodeDebut, periodeFin: result.data.periodeFin, typePayRun: result.data.typePayRun as TypePayRun,}
            const user = await PayRunService.create(entreprisePrisma, data, req.entreprise?.id as number);
            return ReponseFormatter.success(res, user, SuccessCodes.USER_CREATED, 201);
        } catch (err) {
        next(err);
        }
    }
    
}