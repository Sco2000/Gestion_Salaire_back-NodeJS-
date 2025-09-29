import "express-serve-static-core";
import { PrismaClient as EntreprisePrisma } from "../../../../prisma/generated/entreprise";

declare module "express-serve-static-core" {
  interface Request {
    user?: {
      role: $Enums.Role;
      login: string;
    };
    entreprise?: {
      id: number;
    };
    entreprisePrisma?: EntreprisePrisma
  }
}