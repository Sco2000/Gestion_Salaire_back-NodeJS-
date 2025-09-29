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
ALTER TABLE `Paiement` ADD CONSTRAINT `Paiement_bulletinId_fkey` FOREIGN KEY (`bulletinId`) REFERENCES `BulletinsSalaire`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
