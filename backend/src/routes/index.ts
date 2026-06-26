import express from 'express';
const router = express.Router();

// Import health and user routes
import healthRouter from './health';
import userRouter from './user';

router.use('/health', healthRouter);
router.use('/user', userRouter);

export default router;
