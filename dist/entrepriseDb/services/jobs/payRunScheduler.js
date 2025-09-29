"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.schedulePayRunCalculation = schedulePayRunCalculation;
const index_1 = require("../../queue/index");
function schedulePayRunCalculation(payRun, entrepriseId) {
    return __awaiter(this, void 0, void 0, function* () {
        const delay = new Date(payRun.periodeFin).getTime() - Date.now();
        if (delay <= 0) {
            // Si la date de fin est déjà passée, exécuter immédiatement
            yield index_1.payRunQueue.add("calculatePayRun", { payRunId: payRun.id, entrepriseId });
        }
        else {
            // Scheduler le job pour le futur
            yield index_1.payRunQueue.add("calculatePayRun", { payRunId: payRun.id, entrepriseId }, { delay: new Date(payRun.periodeFin).getTime() - Date.now() });
        }
    });
}
//# sourceMappingURL=payRunScheduler.js.map