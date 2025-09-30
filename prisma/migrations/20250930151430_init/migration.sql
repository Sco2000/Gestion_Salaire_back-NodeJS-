/*
  Warnings:

  - You are about to drop the `BulletinsSalaire` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Contrat` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Employes` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Paiement` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `PayRun` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Pointages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `BulletinsSalaire` DROP FOREIGN KEY `BulletinsSalaire_employeId_fkey`;

-- DropForeignKey
ALTER TABLE `BulletinsSalaire` DROP FOREIGN KEY `BulletinsSalaire_payRunId_fkey`;

-- DropForeignKey
ALTER TABLE `Contrat` DROP FOREIGN KEY `Contrat_employeId_fkey`;

-- DropForeignKey
ALTER TABLE `Paiement` DROP FOREIGN KEY `Paiement_bulletinId_fkey`;

-- DropForeignKey
ALTER TABLE `Pointages` DROP FOREIGN KEY `Pointages_employeId_fkey`;

-- DropTable
DROP TABLE `BulletinsSalaire`;

-- DropTable
DROP TABLE `Contrat`;

-- DropTable
DROP TABLE `Employes`;

-- DropTable
DROP TABLE `Paiement`;

-- DropTable
DROP TABLE `PayRun`;

-- DropTable
DROP TABLE `Pointages`;

-- CreateTable
CREATE TABLE `Entreprises` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `telephone` VARCHAR(191) NOT NULL,
    `dbKey` VARCHAR(191) NOT NULL,
    `Statut` ENUM('ACTIF', 'INACTIF') NOT NULL DEFAULT 'ACTIF',
    `date_creation` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `deviseId` INTEGER NOT NULL,

    UNIQUE INDEX `Entreprises_email_key`(`email`),
    UNIQUE INDEX `Entreprises_telephone_key`(`telephone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Utilisateurs` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `login` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `role` ENUM('SUPER_ADMIN', 'ADMIN', 'CAISSIER') NOT NULL,
    `entrepriseId` INTEGER NULL,

    UNIQUE INDEX `Utilisateurs_login_key`(`login`),
    UNIQUE INDEX `Utilisateurs_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Devises` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `libelle` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Devises_libelle_key`(`libelle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Entreprises` ADD CONSTRAINT `Entreprises_deviseId_fkey` FOREIGN KEY (`deviseId`) REFERENCES `Devises`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Utilisateurs` ADD CONSTRAINT `Utilisateurs_entrepriseId_fkey` FOREIGN KEY (`entrepriseId`) REFERENCES `Entreprises`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
