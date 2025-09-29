import globalPrisma from "../../config/prisma";
import { ErrorsMessagesFr } from "../../enum/ErrorsMessagesFr.js";
import { HttpStatusCode } from "../../enum/StatusCode.js";
import bcrypt from 'bcrypt'
import { UserInput } from "../models/UserModel";
import tr from "zod/v4/locales/tr.js";


export class AuthService 
{
  static async selectUserByLogin(data: UserInput)  {
    const user =  await globalPrisma.utilisateurs.findUnique({
        where: {login: data.login}
    });
    if (!user) throw { status: HttpStatusCode.BAD_REQUEST, message: ErrorsMessagesFr.INCORRECT_CREDENTIALS };

    const isMatch = await bcrypt.compare(data.password, user.password);
    if (!isMatch) throw { status: HttpStatusCode.NOT_FOUND, message: ErrorsMessagesFr.INVALID_INPUT };

    const entreprise = await globalPrisma.entreprises.findUnique({
        where: {id : user.entrepriseId},
        include: {devises: {select: {libelle: true}}}
    })
    const userConnected = {id: user.id, prenom: user.prenom, nom: user.nom, email: user.email, role: user.role, login: user.login}
    return {entreprise, userConnected};
  }

    static async verifyUSerByLogin(data: {login: string, role: string})  {
    const user =  await globalPrisma.utilisateurs.findUnique({
        where: {login: data.login},
        include: {entreprises: {select: {dbKey: true, Statut: true}}}
    });
    if (!user) throw { status: HttpStatusCode.BAD_REQUEST, message: ErrorsMessagesFr.INCORRECT_CREDENTIALS };

    return user;
  }
//     static async selectUserByEmail(email: string): Promise<User> {
//     const user =  await OMprisma.user.findUnique({
//         where: {email}
//     });
//     if (!user) throw { status: HttpStatusCode.BAD_REQUEST, message: ErrorsMessagesFr.USER_NOT_FOUND };
//     return user;
//   }

//     static async create(data: UserInput, res: Response) {
//       try {
//         const existing = await OMprisma.user.findUnique({ where: { login: data.login } });
//         if (existing) throw { status: HttpStatusCode.BAD_REQUEST, message: ErrorsMessagesFr.USER_ALREADY_EXISTS };
        
//         return OMprisma.user.create({
//           data
//         });
//       } catch (error: any) {
//         const status = error?.status || 500;
//         const message = error?.message || ErrorsMessagesFr.ERREUR_INTERNE;
//         res.status(status).json({ error: message });
//       }
//   }
}
