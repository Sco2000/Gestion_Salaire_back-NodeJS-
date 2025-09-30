import { Request, Response, NextFunction } from "express";
export declare class AuthMiddleware {
    static authMiddleware(req: Request, res: Response, next: NextFunction): Promise<void | Response<any, Record<string, any>>>;
    static authorizeModification(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=AuthMiddleware.d.ts.map