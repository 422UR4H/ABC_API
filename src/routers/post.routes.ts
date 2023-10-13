import { Router } from 'express';
import { validateAuth, validateBody, validateParams } from '@/middlewares';
import { postBody, postParams, postIdParam } from '@/schemas';
import { createPost, deletePost, getPostsByUserId, updatePost } from '@/controllers';

const postRouter = Router();

postRouter
  .all('/*', validateAuth)
  .get('/', getPostsByUserId)
  .post('/:forumCategory', validateBody(postBody), validateParams(postParams), createPost)
  .put('/:postId', validateBody(postBody), validateParams(postParams), updatePost)
  .delete('/:postId', validateParams(postIdParam), deletePost);

export { postRouter };
