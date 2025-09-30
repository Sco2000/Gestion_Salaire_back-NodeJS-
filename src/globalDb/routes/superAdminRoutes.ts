import express from 'express';
import companiesRoutes from './companiesRoutes';
import userRoutes from './userRoutes';

const router = express.Router();

router.use('/companies', companiesRoutes);
router.use('/user', userRoutes);

export default router;