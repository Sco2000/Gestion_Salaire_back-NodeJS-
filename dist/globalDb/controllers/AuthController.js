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
exports.AuthController = void 0;
const AuthServices_1 = require("../services/AuthServices");
const UserModel_1 = require("../models/UserModel");
const JWTService_1 = require("../../service/JWTService");
const env_1 = require("../../config/env");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class AuthController {
    static login(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = UserModel_1.UserSchema.safeParse(req.body);
            if (!result.success) {
                return res.status(400).json({
                    success: false,
                    errors: result.error.issues,
                });
            }
            const { entreprise, userConnected } = yield AuthServices_1.AuthService.selectUserByLogin(result.data);
            let accesToken = "";
            if (!entreprise) {
                accesToken = JWTService_1.JWTService.cryptData({ user: { login: userConnected.login, role: userConnected.role } }, env_1.JWT_SECRET_KEY, 1);
            }
            else {
                accesToken = JWTService_1.JWTService.cryptData({ user: { login: userConnected.login, role: userConnected.role }, entrepriseId: entreprise === null || entreprise === void 0 ? void 0 : entreprise.id }, env_1.JWT_SECRET_KEY, 1);
            }
            const refreshToken = JWTService_1.JWTService.cryptData({ login: userConnected.login, }, env_1.JWT_SECRET_KEY);
            return res.json({ succes: true, accesToken, refreshToken, userConnected, entreprise });
        });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=AuthController.js.map