import { Request, Response, NextFunction } from 'express';
import { AuthService } from "../services/AuthServices";
import { UserSchema } from '../models/UserModel';
import { createPrismaClientForEntreprise } from '../../config/prisma';
import { ErrorsMessagesFr } from "../../enum/ErrorsMessagesFr.js";
import { HttpStatusCode } from "../../enum/StatusCode.js";
import { JWTService } from '../../service/JWTService';
import { JWT_SECRET_KEY } from '../../config/env';
import dotenv from "dotenv";
import { email } from 'zod';
dotenv.config();

export class AuthController
{
  static async login(req: Request, res: Response, next: NextFunction)  {
    const result = UserSchema.safeParse(req.body);      
    if (!result.success) {
        return res.status(400).json({
          success: false,
          errors: result.error.issues, 
        });
      }

      const {entreprise, userConnected} = await AuthService.selectUserByLogin(result.data);
      if(!entreprise) throw { status: HttpStatusCode.BAD_REQUEST, message: ErrorsMessagesFr.INCORRECT_CREDENTIALS }
      const accesToken = JWTService.cryptData({ user: { login: userConnected.login, role: userConnected.role}, entrepriseId: entreprise.id }, JWT_SECRET_KEY, 1)
      const refreshToken = JWTService.cryptData({login: userConnected.login,}, JWT_SECRET_KEY)
      return res.json({succes: true, accesToken,refreshToken, userConnected, entreprise});
  }

}