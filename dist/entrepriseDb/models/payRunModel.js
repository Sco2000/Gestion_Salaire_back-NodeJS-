"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayRunSchema = void 0;
const zod_1 = require("zod");
exports.PayRunSchema = zod_1.z.object({
    periodeDebut: zod_1.z.preprocess((val) => (typeof val === "string" ? new Date(val) : val), zod_1.z.date()),
    periodeFin: zod_1.z.preprocess((val) => (typeof val === "string" ? new Date(val) : val), zod_1.z.date()),
    typePayRun: zod_1.z.string()
});
//# sourceMappingURL=payRunModel.js.map