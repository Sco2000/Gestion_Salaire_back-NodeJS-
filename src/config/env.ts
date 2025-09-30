import * as dotenv from 'dotenv';

// Charge les variables du fichier .env
dotenv.config();

export const PORT = process.env.PORT || 4000;
export const JWT_SECRET_KEY = process.env.SECRET_KEY as string
