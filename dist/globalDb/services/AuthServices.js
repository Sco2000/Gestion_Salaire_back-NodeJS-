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
exports.AuthService = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
const ErrorsMessagesFr_js_1 = require("../../enum/ErrorsMessagesFr.js");
const StatusCode_js_1 = require("../../enum/StatusCode.js");
const bcrypt_1 = __importDefault(require("bcrypt"));
class AuthService {
    static selectUserByLogin(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.utilisateurs.findUnique({
                where: { login: data.login }
            });
            if (!user)
                throw { status: StatusCode_js_1.HttpStatusCode.BAD_REQUEST, message: ErrorsMessagesFr_js_1.ErrorsMessagesFr.INCORRECT_CREDENTIALS };
            const isMatch = yield bcrypt_1.default.compare(data.password, user.password);
            if (!isMatch)
                throw { status: StatusCode_js_1.HttpStatusCode.NOT_FOUND, message: ErrorsMessagesFr_js_1.ErrorsMessagesFr.INVALID_INPUT };
            if (user.role === "SUPER_ADMIN") {
                return { entreprise: null, userConnected: user };
            }
            const entreprise = yield prisma_1.default.entreprises.findUnique({
                where: { id: user.entrepriseId },
                include: { devises: { select: { libelle: true } } }
            });
            const userConnected = { id: user.id, prenom: user.prenom, nom: user.nom, email: user.email, role: user.role, login: user.login };
            return { entreprise, userConnected };
        });
    }
    static verifyUSerByLogin(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.utilisateurs.findUnique({
                where: { login: data.login },
                include: { entreprises: { select: { dbKey: true, Statut: true } } }
            });
            if (!user)
                throw { status: StatusCode_js_1.HttpStatusCode.BAD_REQUEST, message: ErrorsMessagesFr_js_1.ErrorsMessagesFr.INCORRECT_CREDENTIALS };
            return user;
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=AuthServices.js.map