import { Request, Response, NextFunction } from "express";
import { JWTService } from "../service/JWTService.js"; 
import { HttpStatusCode } from "../enum/StatusCode.js";
import { ErrorsMessagesFr } from "../enum/ErrorsMessagesFr.js";
import { Statut, Utilisateurs } from "../../prisma/generated/global/index.js";
import { Entreprises } from "../../prisma/generated/global/index.js";
import { PrismaClient as EntreprisePrisma } from "../../prisma/generated/entreprise/index.js";
import { createPrismaClientForEntreprise } from "../config/prisma.js";
import { JWT_SECRET_KEY } from "../config/env.js";
import dotenv from 'dotenv'
import { AuthController } from "../globalDb/controllers/AuthController.js";
import { AuthService } from "../globalDb/services/AuthServices.js";
dotenv.config();

export const SECRET_KEY = "ma_clef_secrete";

export class AuthMiddleware
    {
    static async authMiddleware(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader) return res.status(401).json({ error: "Token manquant" });

    const token = authHeader.split(" ")[1];
     if (!token) return res.status(401).json({ error: "Token manquant" });
    try {
        const payload = JWTService.decryptToken(token, JWT_SECRET_KEY) as { user: {login: string, role: string}; entrepriseId: number};
        
        req.user = payload.user;
        req.entreprise = {id: payload.entrepriseId }
        const userConnecte = await AuthService.verifyUSerByLogin(payload.user)
        if (userConnecte.entreprises.Statut === Statut.INACTIF) throw {status: HttpStatusCode.FORBIDDEN, message: ErrorsMessagesFr.FORBIDDEN_ACTION};
        const dsn = process.env[userConnecte.entreprises.dbKey] as string;
        req.entreprisePrisma = createPrismaClientForEntreprise(dsn);

        next();
    } catch (err) {
        return res.status(403).json({ error: "Token invalide" });
    }
    };

    static async authorizeModification(req: Request, res: Response, next: NextFunction) {
            try {
                const user = req.user;
                console.log(user);
                
                if (user?.role !== "ADMIN") throw {status: HttpStatusCode.FORBIDDEN, message: ErrorsMessagesFr.FORBIDDEN_ACTION};
                next()
            } catch (err) {
                next(err);
            }
    }

    // static async authorizePermission(req: Request, res: Response, next: NextFunction){
    //     try {
    //         const id = Number(req.params.id);
    //         const userId = req.user?.id;
    //         const method = req.method as Permission;

    //         const OMPermission = await PermissionUserTacheService.findById(id, userId, method)
    //         if(!OMPermission) throw {status: HttpStatusCode.FORBIDDEN, message: ErrorsMessagesFr.FORBIDDEN_ACTION};
    //         next()
    //     } catch (err) {
    //         next(err)
    //     }
    // }
}