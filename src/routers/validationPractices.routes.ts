import { Router } from 'express';
import { validateAuth, validateParams } from '@/middlewares/';
import { practiceParams } from '@/schemas';
import { validatedPractice, getValidatedPractice } from '@/controllers';

const validatedPracticeRouter = Router();

validatedPracticeRouter
  .all('/*', validateAuth)
  .post('/:practiceId', validateParams(practiceParams), validatedPractice)
  .get('/', getValidatedPractice);

export { validatedPracticeRouter };
