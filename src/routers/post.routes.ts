import { Router } from 'express';
import { validateAuth, validateBody, validateParams } from '@/middlewares';
import { postBody, postCreateParams, postIdParam, postUpdateParams } from '@/schemas/post.schemas';
import { createPost, deletePost, getPostsByUserId, updatePost } from '@/controllers/post.controller';

const postRouter = Router();

postRouter
    .all('/*', validateAuth)
    .get('/', getPostsByUserId)
    .post('/:forumCategory', validateBody(postBody), validateParams(postCreateParams), createPost)
    .put('/:postId', validateBody(postBody), validateParams(postUpdateParams), updatePost)
    .delete('/:postId', validateParams(postIdParam), deletePost);

export { postRouter };
