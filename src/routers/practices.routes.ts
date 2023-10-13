import { Router } from 'express';
import { createPractices, getPractices, updatePractice, deletePractice, upsertPracticeAdvantage } from '@/controllers';
import { validateAuth, validateBody, validateParams } from '@/middlewares';
import { practiceAdvantageBody, practiceBody, practiceParams } from '@/schemas';

const practiceRouter = Router();

practiceRouter
  .get('/', getPractices)
  .all('/', validateAuth)
  .post('/', validateBody(practiceBody), createPractices)
  .post(
    '/advantage/:practiceId',
    validateParams(practiceParams),
    validateBody(practiceAdvantageBody),
    upsertPracticeAdvantage,
  )

  .put('/:practiceId', validateBody(practiceBody), validateParams(practiceParams), updatePractice)
  .delete('/:practiceId', validateParams(practiceParams), deletePractice);

export default practiceRouter;
