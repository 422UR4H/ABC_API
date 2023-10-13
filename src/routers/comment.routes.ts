import { Router } from 'express';
import { validateAuth, validateBody, validateParams } from '@/middlewares';
import { commentBody, commentIdParam } from '@/schemas';
import { createComment, deleteComment, updateComment, getCommentByUserId } from '@/controllers';

const commentRouter = Router();

commentRouter
  .all('/*', validateAuth)
  .get('/', getCommentByUserId)
  .post('/', validateBody(commentBody), createComment)
  .put('/:commentId', validateBody(commentBody), validateParams(commentIdParam), updateComment)
  .delete('/:commentId', validateParams(commentIdParam), deleteComment);

export { commentRouter };
