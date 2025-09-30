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
exports.UserController = void 0;
const zod_1 = require("zod");
const StatusCode_1 = require("../../enum/StatusCode");
const UserService_1 = require("../services/UserService");
const AddUserSchema = zod_1.z.object({
    nom: zod_1.z.string().min(1),
    prenom: zod_1.z.string().min(1),
    login: zod_1.z.string().min(3),
    email: zod_1.z.string().email(),
    password: zod_1.z.string().min(6),
    role: zod_1.z.enum(['ADMIN', 'CAISSIER']),
});
class UserController {
    static addUserToCompany(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { entrepriseId } = req.params;
                if (!entrepriseId) {
                    return res.status(StatusCode_1.HttpStatusCode.BAD_REQUEST).json({
                        success: false,
                        message: 'ID entreprise requis',
                    });
                }
                const result = AddUserSchema.safeParse(req.body);
                if (!result.success) {
                    return res.status(400).json({
                        success: false,
                        errors: result.error.issues,
                    });
                }
                const { nom, prenom, login, email, password, role } = result.data;
                const existing = yield UserService_1.UserService.findUserByLogin(login);
                if (existing) {
                    return res.status(StatusCode_1.HttpStatusCode.BAD_REQUEST).json({
                        success: false,
                        message: 'Utilisateur déjà existant',
                    });
                }
                const hashedPassword = yield UserService_1.UserService.hashPassword(password);
                const user = yield UserService_1.UserService.createUser({
                    nom,
                    prenom,
                    login,
                    email,
                    password: hashedPassword,
                    role: role,
                    entrepriseId: parseInt(entrepriseId),
                });
                res.json({
                    success: true,
                    message: 'Utilisateur ajouté avec succès',
                    user: {
                        id: user.id,
                        nom: user.nom,
                        prenom: user.prenom,
                        email: user.email,
                        role: user.role,
                    },
                });
            }
            catch (error) {
                next(error);
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map