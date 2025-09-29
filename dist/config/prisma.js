"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPrismaClientForEntreprise = createPrismaClientForEntreprise;
const client_1 = require("../../prisma/generated/global/client");
const client_2 = require("../../prisma/generated/entreprise/client");
const globalPrisma = new client_1.PrismaClient();
function createPrismaClientForEntreprise(url) {
    return new client_2.PrismaClient({
        datasources: {
            db: { url }
        }
    });
}
exports.default = globalPrisma;
//# sourceMappingURL=prisma.js.map