import { PrismaClient} from "../../prisma/generated/entreprise";
import dotenv from "dotenv";

dotenv.config();

const prisma = new PrismaClient({
  datasources: {
    db: { url: process.env.DSN_ENTREPRISE_ORANGE as string },
  },
});

async function main() {
  console.log("Début du seeding des pointages...");

  // Récupérer les employés
  const employes = await prisma.employes.findMany();
  console.log(employes);
  

  const pointagesData: any[] = [];

  // Générer des pointages pour chaque employé pour le mois d'août 2025
  for (const employe of employes) {
    for (let day = 1; day <= 20; day++) { // exemple : 20 jours travaillés
      const date = new Date(`2025-08-${day.toString().padStart(2, "0")}T00:00:00Z`);
      
      // Entrée à 9h00, sortie à 17h00
      const entree = new Date(date);
      entree.setHours(9, 0, 0);

      const sortie = new Date(date);
      sortie.setHours(17, 0, 0);

      pointagesData.push({
        employeId: employe.id,
        date,
        entree,
        sortie,
      });
    }
  }

  // Insérer en base
  await prisma.pointages.createMany({
    data: pointagesData,
    skipDuplicates: true,
  });

  console.log("Seeding des pointages terminé ✅");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
