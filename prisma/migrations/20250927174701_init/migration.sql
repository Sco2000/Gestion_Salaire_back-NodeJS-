/*
  Warnings:

  - You are about to drop the column `dbName` on the `Entreprises` table. All the data in the column will be lost.
  - You are about to drop the column `dbSecretId` on the `Entreprises` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `Entreprises` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[telephone]` on the table `Entreprises` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[login]` on the table `Utilisateurs` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `dbKey` to the `Entreprises` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Entreprises` DROP COLUMN `dbName`,
    DROP COLUMN `dbSecretId`,
    ADD COLUMN `dbKey` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Entreprises_email_key` ON `Entreprises`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `Entreprises_telephone_key` ON `Entreprises`(`telephone`);

-- CreateIndex
CREATE UNIQUE INDEX `Utilisateurs_login_key` ON `Utilisateurs`(`login`);
