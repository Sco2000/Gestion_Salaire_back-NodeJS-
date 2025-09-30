import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { ErrorsMessagesFr } from '../../enum/ErrorsMessagesFr';
import { HttpStatusCode } from '../../enum/StatusCode';
import { Statut } from '../../../prisma/generated/global';
import { EntrepriseService } from '../services/EntrepriseService';

const CreateCompanySchema = z.object({
  nom: z.string().min(1),
  email: z.string().email(),
  telephone: z.string().min(1),
  deviseId: z.number(),
});

export class EntrepriseController {
  static async createCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const result = CreateCompanySchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          success: false,
          errors: result.error.issues,
        });
      }

      const { nom, email, telephone, deviseId } = result.data;

      const existing = await EntrepriseService.findCompanyByEmail(email);
      if (existing) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({
          success: false,
          message: ErrorsMessagesFr.USER_ALREADY_EXISTS,
        });
      }

      const dbKey = `DSN_ENTREPRISE_${nom.replace(/\s+/g, '_').toUpperCase()}_${Date.now()}`;
      const dbName = `entreprise_${nom.replace(/\s+/g, '_').toLowerCase()}_${Date.now()}`;
      await EntrepriseService.createDatabase(dbName);

      const dsn = `mysql://root:ousmane00@localhost:3306/${dbName}`;
      await EntrepriseService.addToEnv(dbKey, dsn);
      await EntrepriseService.runMigrations(dsn);

      const company = await EntrepriseService.createCompanyRecord({
        nom,
        email,
        telephone,
        dbKey,
        deviseId,
        Statut: Statut.ACTIF,
      });

      res.json({
        success: true,
        message: 'Entreprise créée avec succès',
        company,
      });
    } catch (error) {
      next(error);
    }
  }

  static async getAllCompanies(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.query);
      
        const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1;
        const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 6;
        const offset = (page - 1) * limit;
        const searchText = (req.query.search as string) || "";
        const searchStatus = (req.query.status as string) || "";
        const sortBy = (req.query.sortBy as string) || "date_generation";
        const ordr = (req.query.order as string) === "desc"? "desc" : "asc";
      const companies = await EntrepriseService.listCompanies(offset, limit, searchText, searchStatus,  sortBy, ordr, next);
      res.json({
        success: true,
        companies,
      });
    } catch (error) {
      next(error);
    }
  }

  static async countCompanies(req: Request, res: Response, next: NextFunction) {
    try {
      const total = await EntrepriseService.countNbCompanies();
      const actifs = await EntrepriseService.countActifCompanies();
      const inactifs = total - actifs;

      res.json({
        success: true,
        total,
        actifs,
        inactifs,
      });
    } catch (error) {
      next(error);
    }
  }
}