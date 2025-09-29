import { payRunQueue } from '../../queue/index';
import { PayRun } from "../../../../prisma/generated/entreprise/index.js";

export async function schedulePayRunCalculation(payRun: PayRun, entrepriseId: number) {
  const delay = new Date(payRun.periodeFin).getTime() - Date.now();

  if (delay <= 0) {
    // Si la date de fin est déjà passée, exécuter immédiatement
    await payRunQueue.add("calculatePayRun", { payRunId: payRun.id, entrepriseId });
  } else {
    // Scheduler le job pour le futur
    await payRunQueue.add(
      "calculatePayRun",
      { payRunId: payRun.id, entrepriseId },
      { delay: new Date(payRun.periodeFin).getTime() - Date.now() }
    );
  }
}