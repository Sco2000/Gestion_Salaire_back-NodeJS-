import { Request, Response, NextFunction } from 'express';
export declare class SuperAdminController {
    static createCompany(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    static listCompanies(req: Request, res: Response, next: NextFunction): Promise<void>;
    static addUserToCompany(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    private static createDatabase;
    private static addToEnv;
    private static runMigrations;
}
//# sourceMappingURL=SuperAdminController.d.ts.map