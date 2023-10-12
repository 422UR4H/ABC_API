import { Router } from 'express';
import { userRouter } from './user.routes';
import { authRouter } from './auth.routes';

const router = Router();

router.use('/sign-up', userRouter).use('/sign-in', authRouter);

export default router;
