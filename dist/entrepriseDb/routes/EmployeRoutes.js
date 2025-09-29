"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EmployeController_1 = require("../controllers/EmployeController");
const AuthMiddleware_1 = require("../../middlewares/AuthMiddleware");
const router = express_1.default.Router();
router.get('/', EmployeController_1.EmployeController.getAll);
router.patch("/:id/markActif", AuthMiddleware_1.AuthMiddleware.authorizeModification, EmployeController_1.EmployeController.markActif);
router.patch("/:id/markInactif", AuthMiddleware_1.AuthMiddleware.authorizeModification, EmployeController_1.EmployeController.markInactif);
exports.default = router;
//# sourceMappingURL=EmployeRoutes.js.map