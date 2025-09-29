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
exports.scheduleTaskStatus = scheduleTaskStatus;
const index_js_1 = require("../queue/index.js");
const client_1 = require("@prisma/client");
function scheduleTaskStatus(task) {
    return __awaiter(this, void 0, void 0, function* () {
        if (task.date_debut) {
            yield index_js_1.taskQueue.add("startTask", { taskId: task.id, newStatus: client_1.Etat.En_Cours }, { delay: new Date(task.date_debut).getTime() - Date.now() });
        }
        if (task.date_fin) {
            yield index_js_1.taskQueue.add("endTask", { taskId: task.id, newStatus: client_1.Etat.Termine }, { delay: new Date(task.date_fin).getTime() - Date.now() });
        }
    });
}
//# sourceMappingURL=taskScheduler.js.map