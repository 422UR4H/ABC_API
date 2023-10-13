import { Router } from 'express';
import { userRouter } from './user.routes';
import { authRouter } from './auth.routes';
import { productsRouter } from './products.routes';
import { practiceRouter } from './practices.routes';
import { userProductsRouter } from './userProducts.routes';
import { forumRouter } from './forum.routes';
import { postRouter } from './post.routes';
import { commentRouter } from './comment.routes';
import { newsRouter } from './news.routes';

const router = Router();

router
  .use('/sign-up', userRouter)
  .use('/sign-in', authRouter)
  .use('/products', productsRouter)
  .use('/practices', practiceRouter)
  .use('/forum', forumRouter)
  .use('/posts', postRouter)
  .use('/comments', commentRouter)
  .use('/user-products', userProductsRouter)
  .use('/news', newsRouter);

export default router;
