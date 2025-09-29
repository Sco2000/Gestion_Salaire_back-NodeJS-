import { PrismaClient as EntreprisePrisma, TypeContrat, PayRunStatut } from '../prisma/generated/entreprise/client';
import { Decimal } from '@prisma/client/runtime/library';
import { PayRunService } from './entrepriseDb/services/PayRunService';

export function validatePayRunPeriod(type: string, debut: Date, fin: Date) {
  const diffMs = fin.getTime() - debut.getTime();
  const diffDays = diffMs / (1000 * 60 * 60 * 24);
  const diffHours = diffMs / (1000 * 60 * 60);

  if (type === "MENSUEL") {
    if (diffDays < 27 || diffDays > 30) {
      throw new Error("Pour un type MENSUEL, la période doit être entre 27 et 30 jours.");
    }
  } else if (type === "HEBDOMADAIRE") {
    if (diffDays < 4 || diffDays > 6) {
      throw new Error("Pour un type HEBDOMADAIRE, la période doit être entre 4 et 6 jours.");
    }
  } else if (type === "JOURNALIER") {
    if (diffHours > 22) {
      throw new Error("Pour un type JOURNALIER, la période doit être de maximum 22 heures.");
    }
  }
}

export async function genererPayRun(
  entreprisePrisma: EntreprisePrisma,
  payRunId: number
) {
  // 1️⃣ Récupérer le PayRun
  const payRun = await entreprisePrisma.payRun.findUnique({ where: { id: payRunId } });
  if (!payRun) throw new Error(`PayRun ${payRunId} non trouvé`);

  // 2️⃣ Déterminer les types de contrats concernés
  let contratsCibles: TypeContrat[] = [];
  if (payRun.typePayRun === "MENSUEL") {
    contratsCibles = [TypeContrat.CDI, TypeContrat.CDD];
  } else {
    contratsCibles = [TypeContrat.JOURNALIER, TypeContrat.HORAIRE];
  }

  // 3️⃣ Récupérer les contrats actifs
  const contratsActifs = await entreprisePrisma.contrat.findMany({
    where: {
      type: { in: contratsCibles },
      date_arret: null,
    },
    include: { employe: true },
  });

    console.log("PayRun récupéré :", payRun);
    console.log("Contrats ciblés :", contratsCibles);
    console.log("Contrats actifs trouvés :", contratsActifs.length);
  // 4️⃣ Pour chaque contrat/employé, calculer le salaire et créer le bulletin
  for (const contrat of contratsActifs) {
    const employe = contrat.employe;
    let salaireBase: Decimal | number = 0;

    switch (contrat.type) {
      case TypeContrat.CDI:
      case TypeContrat.CDD:
        salaireBase = contrat.salaireFixe ?? 0;
        break;

      case TypeContrat.JOURNALIER:
        // Nombre de jours travaillés sur la période
        const joursTravailles = await PayRunService.calculerJoursTravailles(
          entreprisePrisma,
          employe.id,
          payRun.periodeDebut,
          payRun.periodeFin
        );
        console.log(`Employé ${employe.id} - Jours travaillés :`, joursTravailles);

        salaireBase = (contrat.tauxJournalier ?? new Decimal(0)).mul(joursTravailles);
        break;

      case TypeContrat.HORAIRE:
        // Nombre d'heures travaillées sur la période
        const heuresTravailles = await PayRunService.calculerHeuresTravailles(
          entreprisePrisma,
          employe.id,
          payRun.periodeDebut,
          payRun.periodeFin
        );
        console.log(`Employé ${employe.id} - Heures travaillées :`, heuresTravailles);

        salaireBase = (contrat.tauxHoraire ?? new Decimal(0)).mul(heuresTravailles);
        break;
    }
    console.log(`Création bulletin pour employé ${employe.id}, salaire: ${salaireBase}`);

    // 5️⃣ Créer le bulletin de salaire
    await entreprisePrisma.bulletinsSalaire.create({
      data: {
        employeId: employe.id,
        payRunId: payRun.id,
        mois: payRun.periodeDebut.toISOString().slice(0, 7), // "YYYY-MM"
        salaire_base: salaireBase,
        deductions: 0,
        salaire_net: salaireBase,
        date_generation: new Date(),
      },
    });
  }
}
