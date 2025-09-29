"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const BulletinSalaireController_1 = require("../controllers/BulletinSalaireController");
const router = express_1.default.Router();
router.get('/', BulletinSalaireController_1.BulletinSalaireController.getAll);
// router.patch("/:id/markActif", AuthMiddleware.authorizeModification, EmployeController.markActif);
// router.patch("/:id/markInactif", AuthMiddleware.authorizeModification, EmployeController.markInactif);
exports.default = router;
//# sourceMappingURL=BulletinSalaireRoutes.js.map