/*
  Warnings:

  - You are about to alter the column `salaire_base` on the `BulletinsSalaire` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `salaire_net` on the `BulletinsSalaire` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `salaire_base` on the `Employes` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `tauxJournalier` on the `Employes` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `tauxHoraire` on the `Employes` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE `BulletinsSalaire` MODIFY `salaire_base` DECIMAL(10, 2) NULL,
    MODIFY `salaire_net` DECIMAL(10, 2) NOT NULL;

-- AlterTable
ALTER TABLE `Employes` MODIFY `salaire_base` DECIMAL(10, 2) NULL,
    MODIFY `tauxJournalier` DECIMAL(10, 2) NULL,
    MODIFY `tauxHoraire` DECIMAL(10, 2) NULL;
