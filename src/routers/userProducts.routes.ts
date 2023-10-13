import { Router } from 'express';
import { validateAuth, validateParams } from '@/middlewares/';
import { productParams } from '@/schemas';
import {} from '@/controllers';

const userProductsRouter = Router();

userProductsRouter
  .all('/', validateAuth)
  .post('/:productId', validateParams(productParams))
  .get('/')
  .delete('/:productId', validateParams(productParams));

export { userProductsRouter };
