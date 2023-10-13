import { Router } from 'express';
import { userRouter } from './user.routes';
import { authRouter } from './auth.routes';
import { productsRouter } from './products.routes';
import { practiceRouter } from './practices.routes';
import { userProductsRouter } from './userProducts.routes';
import { forumRouter } from './forum.routes';

const router = Router();

router
  .use('/sign-up', userRouter)
  .use('/sign-in', authRouter)
  .use('/products', productsRouter)
  .use('/practices', practiceRouter)
  .use('/forum', forumRouter)
  .use('/posts', forumRouter)
  .use('/comments', forumRouter)
  .use('/user-products', userProductsRouter);

export default router;
