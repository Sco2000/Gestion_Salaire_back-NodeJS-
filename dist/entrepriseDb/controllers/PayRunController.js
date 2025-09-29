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
exports.PayRunController = void 0;
const ReponseFormatter_js_1 = require("../../middlewares/ReponseFormatter.js");
const SuccesCodesFr_js_1 = require("../../enum/SuccesCodesFr.js");
const PayRunService_js_1 = require("../services/PayRunService.js");
const payRunModel_js_1 = require("../models/payRunModel.js");
const utils_js_1 = require("../../utils.js");
class PayRunController {
    static getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const entreprisePrisma = req.entreprisePrisma;
            if (!entreprisePrisma) {
                return res.status(500).json({ error: "Prisma client non initialisé" });
            }
            const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1;
            const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 6;
            const offset = (page - 1) * limit;
            const searchStartDate = req.query.StartDate ? new Date(req.query.StartDate) : null;
            const searchEndDate = req.query.EndDate ? new Date(req.query.EndDate) : null;
            const searchType = req.query.type || "";
            const sortBy = req.query.sortBy || "typePayRun";
            const ordr = req.query.order === "desc" ? "desc" : "asc";
            const payRun = yield PayRunService_js_1.PayRunService.getAll(entreprisePrisma, offset, limit, searchStartDate, searchEndDate, searchType, sortBy, ordr, next);
            const total = yield PayRunService_js_1.PayRunService.count(entreprisePrisma, searchStartDate, searchEndDate, searchType);
            const totalPage = Math.ceil(total / limit);
            const data = { page, limit, total, totalPage, payRun };
            return ReponseFormatter_js_1.ReponseFormatter.success(res, data, SuccesCodesFr_js_1.SuccessCodes.PayRun_ALL_FETCHED);
        });
    }
    static create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const entreprisePrisma = req.entreprisePrisma;
            if (!entreprisePrisma) {
                return res.status(500).json({ error: "Prisma client non initialisé" });
            }
            try {
                const result = payRunModel_js_1.PayRunSchema.safeParse(req.body);
                if (!result.success) {
                    return res.status(400).json({
                        success: false,
                        errors: result.error.issues,
                    });
                }
                (0, utils_js_1.validatePayRunPeriod)(result.data.typePayRun, result.data.periodeDebut, result.data.periodeFin);
                const data = { periodeDebut: result.data.periodeDebut, periodeFin: result.data.periodeFin, typePayRun: result.data.typePayRun, };
                const user = yield PayRunService_js_1.PayRunService.create(entreprisePrisma, data, (_a = req.entreprise) === null || _a === void 0 ? void 0 : _a.id);
                return ReponseFormatter_js_1.ReponseFormatter.success(res, user, SuccesCodesFr_js_1.SuccessCodes.USER_CREATED, 201);
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.PayRunController = PayRunController;
//# sourceMappingURL=PayRunController.js.map