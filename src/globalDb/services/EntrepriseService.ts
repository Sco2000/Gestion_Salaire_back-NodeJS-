import globalPrisma from '../../config/prisma';
import mysql from 'mysql2/promise';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { promisify } from 'util';
import { Statut } from '../../../prisma/generated/global';
import { NextFunction } from 'express';

const execAsync = promisify(exec);

export class EntrepriseService {
  static async findCompanyByEmail(email: string) {
    return globalPrisma.entreprises.findUnique({ where: { email } });
  }

  static async createCompanyRecord(data: any) {
    return globalPrisma.entreprises.create({ data });
  }

  static async listCompanies(offset: number, limit: number, searchText: string, searchStatus: string,  sortBy: string, order: string, next: NextFunction) {
    try {
        const where: any = {};
        if (searchText) {
            where.OR = [
                { nom: { contains: searchText } },
                { prenom: { contains: searchText } },
                { email: { contains: searchText } },
            ];
        }
        
        if (searchStatus) {
        where.statut = searchStatus as Statut;
        }
        return globalPrisma.entreprises.findMany({
            where,
            include: {
                devises: true,
                Utilisateurs: {
                select: {
                    id: true,
                    nom: true,
                    prenom: true,
                    email: true,
                    role: true,
                },
                },
            },
        });
    } catch (error) {
        next(error)
    }
  }

  static async createDatabase(dbName: string) {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'ousmane00',
    });
    await connection.execute(`CREATE DATABASE IF NOT EXISTS \`${dbName}\``);
    await connection.end();
  }

  static async addToEnv(key: string, value: string) {
    const envPath = path.join(process.cwd(), '.env');
    fs.appendFileSync(envPath, `\n${key}="${value}"`);
  }

  static async runMigrations(dsn: string) {
    const schemaPath = path.join(process.cwd(), 'prisma', 'schema.entreprise.prisma');
    const migrationsPath = path.join(process.cwd(), 'prisma', 'migrations');

    if (!fs.existsSync(migrationsPath) || fs.readdirSync(migrationsPath).length === 0) {
      throw new Error("Aucune migration trouvée. Veuillez générer la migration initiale avec 'npx prisma migrate dev --schema=prisma/schema.entreprise.prisma --name init'");
    }

    const deployCommand = `npx prisma migrate deploy --schema=${schemaPath}`;
    const env = { ...process.env, DATABASE_URL: dsn };
    await execAsync(deployCommand, { env });
  }

  static async countNbCompanies(): Promise<number> {
    return globalPrisma.entreprises.count();
  }

  static async countActifCompanies(): Promise<number> {
    return globalPrisma.entreprises.count({
      where: { Statut: "ACTIF" }
    });
  }
}