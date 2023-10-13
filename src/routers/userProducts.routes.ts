import { Router } from 'express';
import { validateAuth, validateParams } from '@/middlewares/';
import { productParams } from '@/schemas';
import { addUserProduct, deleteUserProduct, getUserProduct, getUserProductById } from '@/controllers';

const userProductsRouter = Router();

userProductsRouter
  .all('/', validateAuth)
  .post('/:productId', validateParams(productParams), addUserProduct)
  .get('/', getUserProduct)
  .get('/:productId', getUserProductById)
  .delete('/:productId', validateParams(productParams), deleteUserProduct);

export { userProductsRouter };
