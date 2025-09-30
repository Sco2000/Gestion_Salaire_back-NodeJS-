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
    `typeContrat` ENUM('CDI', 'CDD', 'JOURNALIER', 'HORAIRE') NOT NULL,
    `role` ENUM('CAISSIER', 'EMPLOYE') NOT NULL DEFAULT 'EMPLOYE',
    `statut` ENUM('ACTIF', 'INACTIF') NOT NULL DEFAULT 'ACTIF',

    UNIQUE INDEX `Employes_email_key`(`email`),
    UNIQUE INDEX `Employes_telephone_key`(`telephone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `BulletinsSalaire` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mois` VARCHAR(191) NOT NULL,
    `salaire_base` DECIMAL(10, 2) NULL,
    `deductions` DECIMAL(10, 2) NOT NULL DEFAULT 0.00,
    `salaire_net` DECIMAL(10, 2) NOT NULL,
    `date_generation` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `payRunId` INTEGER NOT NULL,
    `employeId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PayRun` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `periodeDebut` DATETIME(3) NOT NULL,
    `periodeFin` DATETIME(3) NOT NULL,
    `statut` ENUM('EN_COURS', 'VALIDE', 'PAYE') NOT NULL DEFAULT 'EN_COURS',
    `typePayRun` ENUM('MENSUEL', 'HEBDOMADAIRE', 'JOURNALIER') NOT NULL DEFAULT 'MENSUEL',
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

-- CreateTable
CREATE TABLE `Pointages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employeId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `entree` DATETIME(3) NOT NULL,
    `sortie` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paiement` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `montant` DECIMAL(65, 30) NOT NULL,
    `mode` ENUM('ESPECES', 'VIREMENT', 'CHEQUE') NOT NULL,
    `statut` ENUM('EN_ATTENTE', 'PAYE', 'ECHEC') NOT NULL,
    `reference` VARCHAR(191) NULL,
    `date_paiement` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `bulletinId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `BulletinsSalaire` ADD CONSTRAINT `BulletinsSalaire_payRunId_fkey` FOREIGN KEY (`payRunId`) REFERENCES `PayRun`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `BulletinsSalaire` ADD CONSTRAINT `BulletinsSalaire_employeId_fkey` FOREIGN KEY (`employeId`) REFERENCES `Employes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Contrat` ADD CONSTRAINT `Contrat_employeId_fkey` FOREIGN KEY (`employeId`) REFERENCES `Employes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pointages` ADD CONSTRAINT `Pointages_employeId_fkey` FOREIGN KEY (`employeId`) REFERENCES `Employes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paiement` ADD CONSTRAINT `Paiement_bulletinId_fkey` FOREIGN KEY (`bulletinId`) REFERENCES `BulletinsSalaire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
