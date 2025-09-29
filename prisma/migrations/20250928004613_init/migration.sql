/*
  Warnings:

  - You are about to drop the `Devises` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Entreprises` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Utilisateurs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Entreprises` DROP FOREIGN KEY `Entreprises_deviseId_fkey`;

-- DropForeignKey
ALTER TABLE `Utilisateurs` DROP FOREIGN KEY `Utilisateurs_entrepriseId_fkey`;

-- DropTable
DROP TABLE `Devises`;

-- DropTable
DROP TABLE `Entreprises`;

-- DropTable
DROP TABLE `Utilisateurs`;

-- CreateTable
CREATE TABLE `Employes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `poste` VARCHAR(191) NOT NULL,
    `date_embauche` DATETIME(3) NOT NULL,
    `date_arret` DATETIME(3) NULL,
    `salaire_base` DECIMAL(65, 30) NULL,
    `tauxJournalier` DECIMAL(65, 30) NULL,
    `tauxHoraire` DECIMAL(65, 30) NULL,
    `typeContrat` ENUM('HONORAIRE', 'JOURNALIÈRE', 'FIXE') NOT NULL,
    `statut` ENUM('ACTIF', 'INACTIF') NOT NULL DEFAULT 'ACTIF',

    UNIQUE INDEX `Employes_email_key`(`email`),
    UNIQUE INDEX `Employes_telephone_key`(`telephone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BulletinsSalaire` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mois` VARCHAR(191) NOT NULL,
    `salaire_base` DECIMAL(65, 30) NULL,
    `deductions` DECIMAL(65, 30) NOT NULL DEFAULT 0,
    `salaire_net` DECIMAL(65, 30) NOT NULL,
    `date_generation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `employeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BulletinsSalaire` ADD CONSTRAINT `BulletinsSalaire_employeId_fkey` FOREIGN KEY (`employeId`) REFERENCES `Employes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
