"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWTService = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JWTService {
    static cryptData(data, secretKey, validityTime) {
        const option = {};
        if (validityTime)
            option.expiresIn = `${validityTime}h`;
        return jsonwebtoken_1.default.sign(data, secretKey, option);
    }
    static decryptToken(token, secretKey) {
        return jsonwebtoken_1.default.verify(token, secretKey);
    }
}
exports.JWTService = JWTService;
//# sourceMappingURL=JWTService.js.map