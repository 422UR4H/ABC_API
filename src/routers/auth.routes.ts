import { Router } from 'express';
import { validateBody } from '@/middlewares/';
import { signInSchema } from '@/schemas';
import { createSession } from '@/controllers';
const authRouter = Router();

authRouter.post('/', validateBody(signInSchema), createSession);

export { authRouter };
