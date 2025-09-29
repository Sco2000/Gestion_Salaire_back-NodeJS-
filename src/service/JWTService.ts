import jwt from 'jsonwebtoken'
import { JWT_SECRET_KEY } from '../config/env.js';
import { Response } from 'express';


export class JWTService
{
    static cryptData(data: Record<string, unknown>, secretKey: string, validityTime?: number) {
        const option: jwt.SignOptions = {}
        if (validityTime) option.expiresIn = `${validityTime}h`;
        return jwt.sign(data, secretKey, option);
    }

    static decryptToken(token: string, secretKey: string,){
        return jwt.verify(token, secretKey);
    }

    // static async refreshToken(token: string, secretKey: string){
    //     const decoded = this.decryptToken(token, secretKey);
    //     if(decoded){
    //         const payload = decoded as { login: string };
    //         const user = await UserService.selectUserByLogin(payload.login);
    //         if(!user) return null;
    //         return  this.cryptData({login: user.login, id: user.id}, JWT_SECRET_KEY, 1);
    //     }
    //     return null;
    // }
}