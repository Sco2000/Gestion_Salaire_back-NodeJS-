import { Request, Response, NextFunction } from 'express';
export declare class EmployeController {
    static getAll(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>>>;
    static markActif(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    static markInactif(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
}
//# sourceMappingURL=EmployeController.d.ts.map