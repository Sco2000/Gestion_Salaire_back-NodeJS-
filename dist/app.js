"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const authRoutes_1 = __importDefault(require("./globalDb/routes/authRoutes"));
const EmployeRoutes_1 = __importDefault(require("./entrepriseDb/routes/EmployeRoutes"));
const BulletinSalaireRoutes_1 = __importDefault(require("./entrepriseDb/routes/BulletinSalaireRoutes"));
const PayRunRoutes_1 = __importDefault(require("./entrepriseDb/routes/PayRunRoutes"));
const PaiementsRoutes_1 = __importDefault(require("./entrepriseDb/routes/PaiementsRoutes"));
const AuthMiddleware_1 = require("./middlewares/AuthMiddleware");
const ErrorController_1 = require("./middlewares/ErrorController");
const superAdminRoutes_1 = __importDefault(require("./globalDb/routes/superAdminRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get('/', (req, res) => {
    res.send('API Gestion salaire en marche ...');
});
app.use('/api/auth', authRoutes_1.default);
app.use(AuthMiddleware_1.AuthMiddleware.authMiddleware);
app.use('/api/super-admin', superAdminRoutes_1.default);
app.use('/api/employes', EmployeRoutes_1.default);
app.use('/api/bulletins', BulletinSalaireRoutes_1.default);
app.use('/api/payrun', PayRunRoutes_1.default);
app.use('/api/paiements', PaiementsRoutes_1.default);
app.use(ErrorController_1.ErrorController.handle);
exports.default = app;
//# sourceMappingURL=app.js.map