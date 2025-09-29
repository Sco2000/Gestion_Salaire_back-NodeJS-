import express from 'express';
import { EmployeController } from '../controllers/EmployeController'; 
import { AuthMiddleware } from '../../middlewares/AuthMiddleware';

const router = express.Router();

router.get('/', EmployeController.getAll);
router.patch("/:id/markActif", AuthMiddleware.authorizeModification, EmployeController.markActif);
router.patch("/:id/markInactif", AuthMiddleware.authorizeModification, EmployeController.markInactif);

export default router;