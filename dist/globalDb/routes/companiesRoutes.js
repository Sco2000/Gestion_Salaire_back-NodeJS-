"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const EntrepriseController_1 = require("../controllers/EntrepriseController");
const router = express_1.default.Router();
router.post('/', EntrepriseController_1.EntrepriseController.createCompany);
router.get('/', EntrepriseController_1.EntrepriseController.getAllCompanies);
router.get('/count', EntrepriseController_1.EntrepriseController.countCompanies);
exports.default = router;
//# sourceMappingURL=companiesRoutes.js.map