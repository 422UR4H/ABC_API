import { Router } from 'express';
import { validateBody } from '@/middlewares';
import { createUserSchema } from '@/schemas';
import { createUser } from '@/controllers';

const userRouter = Router();

userRouter.post('/', validateBody(createUserSchema), createUser);

export { userRouter };
