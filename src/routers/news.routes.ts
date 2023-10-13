import { Router } from 'express';
import { getNews, getNewsById, addNews, editNews, deleteNews } from '@/controllers';
import { validateAuth, validateBody, validateParams } from '@/middlewares';
import { newsCreateSchema, newsUpdateSchema, newsParamsSchema } from '@/schemas';

const newsRouter = Router();

newsRouter
  .get('/', getNews)
  .get('/:newsId', validateParams(newsParamsSchema), getNewsById)
  .all('/*', validateAuth)
  .post('/', validateBody(newsCreateSchema), addNews)
  .put('/:newsId', validateBody(newsUpdateSchema), validateParams(newsParamsSchema), editNews)
  .delete('/:newsId', validateParams(newsParamsSchema), deleteNews);

export { newsRouter };
