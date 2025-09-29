/*
  Warnings:

  - You are about to drop the column `salaire_base` on the `Employes` table. All the data in the column will be lost.
  - You are about to drop the column `tauxHoraire` on the `Employes` table. All the data in the column will be lost.
  - You are about to drop the column `tauxJournalier` on the `Employes` table. All the data in the column will be lost.
  - The values [HONORAIRE,JOURNALIÈRE,FIXE] on the enum `Contrat_type` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `payRunId` to the `BulletinsSalaire` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `BulletinsSalaire` ADD COLUMN `payRunId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `Employes` DROP COLUMN `salaire_base`,
    DROP COLUMN `tauxHoraire`,
    DROP COLUMN `tauxJournalier`,
    MODIFY `typeContrat` ENUM('CDI', 'CDD', 'JOURNALIER', 'HORAIRE') NOT NULL;

-- CreateTable
CREATE TABLE `PayRun` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `periodeDebut` DATETIME(3) NOT NULL,
    `periodeFin` DATETIME(3) NOT NULL,
    `statut` ENUM('EN_COURS', 'VALIDE', 'PAYE') NOT NULL DEFAULT 'EN_COURS',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Contrat` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employeId` INTEGER NOT NULL,
    `type` ENUM('CDI', 'CDD', 'JOURNALIER', 'HORAIRE') NOT NULL,
    `salaireFixe` DECIMAL(10, 2) NULL,
    `tauxJournalier` DECIMAL(10, 2) NULL,
    `tauxHoraire` DECIMAL(10, 2) NULL,
    `date_embauche` DATETIME(3) NOT NULL,
    `date_arret` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BulletinsSalaire` ADD CONSTRAINT `BulletinsSalaire_payRunId_fkey` FOREIGN KEY (`payRunId`) REFERENCES `PayRun`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contrat` ADD CONSTRAINT `Contrat_employeId_fkey` FOREIGN KEY (`employeId`) REFERENCES `Employes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
