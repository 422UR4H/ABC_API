import { Router } from 'express';
import { validateAuth, validateParams } from '@/middlewares/';
import { practiceParams } from '@/schemas';
import { validatedPractice } from '@/controllers';

const validatedPracticeRouter = Router();

validatedPracticeRouter.all('/*', validateAuth).post('/:practiceId', validateParams(practiceParams), validatedPractice);

export { validatedPracticeRouter };
