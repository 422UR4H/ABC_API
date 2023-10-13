import { Router } from 'express';
import { createProduct, getProduct, getProductByIdAndPractice, updateProduct, deleteProduct } from '@/controllers';
import { validateAuth, validateBody, validateParams } from '@/middlewares';
import { productBody, productParams } from '@/schemas';

const productsRouter = Router();

productsRouter
  .get('/', getProduct)
  .get('/:productId', validateParams(productParams), getProductByIdAndPractice)
  .all('/*', validateAuth)
  .post('/', validateBody(productBody), createProduct)
  .put('/:productId', validateBody(productBody), validateParams(productParams), updateProduct)
  .delete('/:productId', validateParams(productParams), deleteProduct);

export { productsRouter };

