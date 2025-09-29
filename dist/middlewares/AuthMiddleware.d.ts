import { Request, Response, NextFunction } from "express";
export declare const SECRET_KEY = "ma_clef_secrete";
export declare class AuthMiddleware {
    static authMiddleware(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    static authorizeModification(req: Request, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=AuthMiddleware.d.ts.map