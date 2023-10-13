import { Router } from 'express';
import { validateAuth, validateBody, validateParams } from '@/middlewares';
import { commentBody, commentIdParam } from '@/schemas/comments.schemas';
import { createComment, deleteComment, updateComment, getCommentByUserId } from '@/controllers/comment.controller';

const commentRouter = Router();

commentRouter
    .all('/*', validateAuth)
    .get('/', getCommentByUserId)
    .post('/:postId', validateBody(commentBody), validateParams(commentIdParam), createComment)
    .put('/:commentId', validateBody(commentBody), validateParams(commentIdParam), updateComment)
    .delete('/:commentId', validateParams(commentIdParam), deleteComment);

export { commentRouter };
