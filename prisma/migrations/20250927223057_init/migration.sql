/*
  Warnings:

  - A unique constraint covering the columns `[libelle]` on the table `Devises` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Devises_libelle_key` ON `Devises`(`libelle`);
