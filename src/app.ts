import  express, {Request , Response}  from "express";
import cors from "cors";
import AuthRoutes from './globalDb/routes/authRoutes'
import EmployeRoutes from './entrepriseDb/routes/EmployeRoutes'
import BulletinsSalaireRoutes from './entrepriseDb/routes/BulletinSalaireRoutes'
import PayRunRoutes from './entrepriseDb/routes/PayRunRoutes'
import PaeiementsRoutes from './entrepriseDb/routes/PaiementsRoutes'
import { AuthMiddleware } from "./middlewares/AuthMiddleware";
import { ErrorController } from "./middlewares/ErrorController";

const app = express();


app.use(express.json());
app.use(cors())

app.get('/' , (req: Request , res: Response) => {
    res.send('API Gestion salaire en marche ...');
})

app.use('/api/auth', AuthRoutes)
app.use(AuthMiddleware.authMiddleware)
app.use('/api/employes', EmployeRoutes)
app.use('/api/bulletins', BulletinsSalaireRoutes)
app.use('/api/payrun', PayRunRoutes)
app.use('/api/paiements', PaeiementsRoutes)

app.use(ErrorController.handle)

export default app;