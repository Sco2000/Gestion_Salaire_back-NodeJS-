import globalPrisma from '../../config/prisma';
import bcrypt from 'bcrypt';

export class UserService {
  static async findUserByLogin(login: string) {
    return globalPrisma.utilisateurs.findUnique({ where: { login } });
  }

  static async createUser(data: any) {
    return globalPrisma.utilisateurs.create({ data });
  }

  static async hashPassword(password: string) {
    return bcrypt.hash(password, 10);
  }
}