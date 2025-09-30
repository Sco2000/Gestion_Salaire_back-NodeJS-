import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { HttpStatusCode } from '../../enum/StatusCode';
import { Role } from '../../../prisma/generated/global';
import { UserService } from '../services/UserService';

const AddUserSchema = z.object({
  nom: z.string().min(1),
  prenom: z.string().min(1),
  login: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(['ADMIN', 'CAISSIER']),
});

export class UserController {
  static async addUserToCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const { entrepriseId } = req.params;
      if (!entrepriseId) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({
          success: false,
          message: 'ID entreprise requis',
        });
      }

      const result = AddUserSchema.safeParse(req.body);
      if (!result.success) {
        return res.status(400).json({
          success: false,
          errors: result.error.issues,
        });
      }

      const { nom, prenom, login, email, password, role } = result.data;

      const existing = await UserService.findUserByLogin(login);
      if (existing) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({
          success: false,
          message: 'Utilisateur déjà existant',
        });
      }

      const hashedPassword = await UserService.hashPassword(password);

      const user = await UserService.createUser({
        nom,
        prenom,
        login,
        email,
        password: hashedPassword,
        role: role as Role,
        entrepriseId: parseInt(entrepriseId),
      });

      res.json({
        success: true,
        message: 'Utilisateur ajouté avec succès',
        user: {
          id: user.id,
          nom: user.nom,
          prenom: user.prenom,
          email: user.email,
          role: user.role,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}