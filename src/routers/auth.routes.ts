import { Router } from 'express';
import { validateBody } from '@/middlewares/schema.middleware';
import { signInSchema } from '@/schemas/auth.schema';
import { createSession } from '@/controllers/auth.controller';
const authRouter = Router();

authRouter.post('/', validateBody(signInSchema), createSession);

export { authRouter };
