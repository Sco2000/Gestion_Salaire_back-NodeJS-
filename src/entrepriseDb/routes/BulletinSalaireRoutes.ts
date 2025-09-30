import express from 'express';
import { BulletinSalaireController } from '../controllers/BulletinSalaireController';  
import { AuthMiddleware } from '../../middlewares/AuthMiddleware';

const router = express.Router();

router.get('/', BulletinSalaireController.getAll);
router.get('/current-month', BulletinSalaireController.getCurrentMonth);
// router.patch("/:id/markActif", AuthMiddleware.authorizeModification, EmployeController.markActif);
// router.patch("/:id/markInactif", AuthMiddleware.authorizeModification, EmployeController.markInactif);

export default router;