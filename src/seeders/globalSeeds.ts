import { PrismaClient, Role, Statut } from '../../prisma/generated/global';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // --- 1. Devises ---
const deviseFCFA = await prisma.devises.create({
  data: { libelle: "FCFA" }
});

const deviseEUR = await prisma.devises.create({
  data: { libelle: "EUR" }
});


  // --- 2. Entreprises ---
  const entreprise1 = await prisma.entreprises.create({
    data: {
      nom: "Orange SA",
      email: "orange@exemple.com",
      telephone: "770000001",
      dbKey: "DB_ENTREPRISE_ORANGE",
      date_creation: new Date("2024-01-01T09:00:00Z"), // 👈 Date forcée,
      Statut: Statut.ACTIF,
      deviseId: deviseFCFA!.id,
    },
  });

  const entreprise2 = await prisma.entreprises.create({
    data: {
      nom: "Free SA",
      email: "free@exemple.com",
      telephone: "770000002",
      dbKey: "DB_ENTREPRISE_FREE",
      Statut: Statut.ACTIF,
      date_creation: new Date("2025-02-01T09:00:00Z"), 
      deviseId: deviseEUR!.id,
    },
  });

  // --- 3. Utilisateurs ---
  const hashedPassword = await bcrypt.hash("password123", 10);

  await prisma.utilisateurs.createMany({
    data: [
      {
        nom: "Marra",
        prenom: "Fallou",
        login: "superadmin",
        email: "fallou@gmail.com",
        password: hashedPassword,
        role: Role.SUPER_ADMIN,
        entrepriseId: null,
      },
      {
        nom: "Marra",
        prenom: "Ousmane",
        login: "admin1",
        email: "ousmane@gmail.com",
        password: hashedPassword,
        role: Role.ADMIN,
        entrepriseId: entreprise1.id,
      },
      {
        nom: "Admin",
        prenom: "Entreprise2",
        login: "admin2",
        password: hashedPassword,
        email: "falloundiaye@gmail.com",
        role: Role.ADMIN,
        entrepriseId: entreprise2.id,
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Seeding terminé !');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
