import express from 'express';
import { EntrepriseController } from '../controllers/EntrepriseController';

const router = express.Router();

router.post('/', EntrepriseController.createCompany);
router.get('/', EntrepriseController.getAllCompanies);
router.get('/count', EntrepriseController.countCompanies);

export default router;