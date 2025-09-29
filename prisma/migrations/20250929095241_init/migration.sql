/*
  Warnings:

  - You are about to alter the column `deductions` on the `BulletinsSalaire` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.

*/
-- AlterTable
ALTER TABLE `BulletinsSalaire` MODIFY `deductions` DECIMAL(10, 2) NOT NULL DEFAULT 0.00;

-- AlterTable
ALTER TABLE `PayRun` MODIFY `typePayRun` ENUM('MENSUEL', 'HEBDOMADAIRE', 'JOURNALIER') NOT NULL DEFAULT 'MENSUEL';
