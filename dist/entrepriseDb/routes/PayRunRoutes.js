"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const PayRunController_1 = require("../controllers/PayRunController");
const router = express_1.default.Router();
router.get('/', PayRunController_1.PayRunController.getAll);
router.post('/', PayRunController_1.PayRunController.create);
// router.patch("/:id/markActif", AuthMiddleware.authorizeModification, EmployeController.markActif);
// router.patch("/:id/markInactif", AuthMiddleware.authorizeModification, EmployeController.markInactif);
exports.default = router;
//# sourceMappingURL=PayRunRoutes.js.map