import express from 'express';
import { PayRunController } from '../controllers/PayRunController';  
import { AuthMiddleware } from '../../middlewares/AuthMiddleware';

const router = express.Router();

router.get('/', PayRunController.getAll);
router.post('/', PayRunController.create);
// router.patch("/:id/markActif", AuthMiddleware.authorizeModification, EmployeController.markActif);
// router.patch("/:id/markInactif", AuthMiddleware.authorizeModification, EmployeController.markInactif);

export default router;