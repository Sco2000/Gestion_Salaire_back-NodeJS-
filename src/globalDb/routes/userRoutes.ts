import express from 'express';
import { UserController } from '../controllers/UserController';

const router = express.Router();

router.post('/:entrepriseId', UserController.addUserToCompany);

export default router;