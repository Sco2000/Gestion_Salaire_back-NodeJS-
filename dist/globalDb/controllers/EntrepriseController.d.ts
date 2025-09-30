import { Request, Response, NextFunction } from 'express';
export declare class EntrepriseController {
    static createCompany(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    static getAllCompanies(req: Request, res: Response, next: NextFunction): Promise<void>;
    static countCompanies(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=EntrepriseController.d.ts.map