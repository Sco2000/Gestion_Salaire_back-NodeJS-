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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const JWTService_js_1 = require("../service/JWTService.js");
const StatusCode_js_1 = require("../enum/StatusCode.js");
const ErrorsMessagesFr_js_1 = require("../enum/ErrorsMessagesFr.js");
const index_js_1 = require("../../prisma/generated/global/index.js");
const prisma_js_1 = require("../config/prisma.js");
const env_js_1 = require("../config/env.js");
const dotenv_1 = __importDefault(require("dotenv"));
const AuthServices_js_1 = require("../globalDb/services/AuthServices.js");
dotenv_1.default.config();
// export const SECRET_KEY = "ma_clef_secrete";
class AuthMiddleware {
    static authMiddleware(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const authHeader = req.headers.authorization;
            if (!authHeader)
                return res.status(401).json({ error: "Token manquant" });
            const token = authHeader.split(" ")[1];
            if (!token)
                return res.status(401).json({ error: "Token manquant" });
            try {
                const payload = JWTService_js_1.JWTService.decryptToken(token, env_js_1.JWT_SECRET_KEY);
                // console.log(payload);
                if (!payload.entrepriseId) {
                    const userConnecte = yield AuthServices_js_1.AuthService.verifyUSerByLogin(payload.user);
                    req.user = userConnecte;
                    return next();
                }
                req.user = payload.user;
                req.entreprise = { id: payload.entrepriseId };
                const userConnecte = yield AuthServices_js_1.AuthService.verifyUSerByLogin(payload.user);
                if (((_a = userConnecte.entreprises) === null || _a === void 0 ? void 0 : _a.Statut) === index_js_1.Statut.INACTIF)
                    throw { status: StatusCode_js_1.HttpStatusCode.FORBIDDEN, message: ErrorsMessagesFr_js_1.ErrorsMessagesFr.FORBIDDEN_ACTION };
                const userEntreprise = userConnecte.entreprises;
                const dsn = process.env[userEntreprise.dbKey];
                req.entreprisePrisma = (0, prisma_js_1.createPrismaClientForEntreprise)(dsn);
                next();
            }
            catch (err) {
                next(err);
            }
        });
    }
    ;
    static authorizeModification(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = req.user;
                console.log(user);
                if ((user === null || user === void 0 ? void 0 : user.role) !== "ADMIN")
                    throw { status: StatusCode_js_1.HttpStatusCode.FORBIDDEN, message: ErrorsMessagesFr_js_1.ErrorsMessagesFr.FORBIDDEN_ACTION };
                next();
            }
            catch (err) {
                next(err);
            }
        });
    }
}
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=AuthMiddleware.js.map