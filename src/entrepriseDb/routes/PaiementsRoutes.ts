import express from 'express';
import { PaiementsController } from '../controllers/PaiementsController';  
import { AuthMiddleware } from '../../middlewares/AuthMiddleware';

const router = express.Router();

router.get('/', PaiementsController.getAll);
// router.post('/', PaiementsController.create);
// router.patch("/:id/markActif", AuthMiddleware.authorizeModification, EmployeController.markActif);
// router.patch("/:id/markInactif", AuthMiddleware.authorizeModification, EmployeController.markInactif);

export default router;