import { Request, Response, NextFunction } from 'express';
export declare class SuperAdminController {
    static createCompany(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    static listCompanies(req: Request, res: Response, next: NextFunction): Promise<void>;
    static addUserToCompany(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    static countCompanies(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=SuperAdminController.d.ts.map