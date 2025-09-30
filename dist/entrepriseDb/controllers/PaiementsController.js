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
exports.PaiementsController = void 0;
const PaiementsService_js_1 = require("../services/PaiementsService.js");
const ReponseFormatter_js_1 = require("../../middlewares/ReponseFormatter.js");
const SuccesCodesFr_js_1 = require("../../enum/SuccesCodesFr.js");
class PaiementsController {
    static getAll(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const entreprisePrisma = req.entreprisePrisma;
            if (!entreprisePrisma) {
                return res.status(500).json({ error: "Prisma client non initialisé" });
            }
            try {
                const page = Number(req.query.page) > 0 ? Number(req.query.page) : 1;
                const limit = Number(req.query.limit) > 0 ? Number(req.query.limit) : 6;
                const offset = (page - 1) * limit;
                const searchText = req.query.search || "";
                const searchStatus = req.query.status || "";
                const searchMode = req.query.mode || "";
                const searchPaiementStatut = req.query.paiement || "";
                const searchDate = req.query.date ? new Date(req.query.EndDate) : null;
                const sortBy = req.query.sortBy || "statut";
                const ordr = req.query.order === "desc" ? "desc" : "asc";
                const employes = yield PaiementsService_js_1.PaiementsService.getAll(entreprisePrisma, offset, limit, searchText, searchStatus, searchMode, searchPaiementStatut, searchDate, sortBy, ordr, next);
                const total = yield PaiementsService_js_1.PaiementsService.count(entreprisePrisma, searchText, searchStatus, searchMode, searchPaiementStatut);
                const totalPage = Math.ceil(total / limit);
                const data = { page, limit, total, totalPage, employes };
                return ReponseFormatter_js_1.ReponseFormatter.success(res, data, SuccesCodesFr_js_1.SuccessCodes.Paiements_ALL_FETCHED);
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.PaiementsController = PaiementsController;
//# sourceMappingURL=PaiementsController.js.map