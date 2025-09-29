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
class AuthService {
    static selectUserByLogin(login) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.default.utilisateurs.findUnique({
                where: { login }
            });
            if (!user)
                throw { status: StatusCode_js_1.HttpStatusCode.BAD_REQUEST, message: ErrorsMessagesFr_js_1.ErrorsMessagesFr.INCORRECT_CREDENTIALS };
            const entreprise = yield prisma_1.default.entreprises.findUnique({
                where: { id: user.entrepriseId }
            });
            return entreprise;
        });
    }
}
exports.AuthService = AuthService;
//# sourceMappingURL=AuthServices.js.map