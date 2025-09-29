-- CreateTable
CREATE TABLE `Pointages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `employeId` INTEGER NOT NULL,
    `date` DATETIME(3) NOT NULL,
    `entree` DATETIME(3) NOT NULL,
    `sortie` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Pointages` ADD CONSTRAINT `Pointages_employeId_fkey` FOREIGN KEY (`employeId`) REFERENCES `Employes`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
