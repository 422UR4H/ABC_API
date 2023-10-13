import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { commentServices } from '@/services/comment.service';
import { CommentCreateInput, CommentUpdateInput } from '@/protocols/comments.protocols';
import { UserCredentials } from '@/protocols';
import { badRequest } from '@/errors/customErrors';


export async function createComment(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const result = await commentServices.createComment(req.body as CommentCreateInput, user.userId);
  
  return res.status(httpStatus.CREATED).send(result);
}

export async function getCommentByUserId(_req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const result = await commentServices.findCommentByUserId(user.userId);

  return res.status(httpStatus.OK).send(result);
}

export async function updateComment(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const result = await commentServices.updateComment(req.body as CommentUpdateInput, user.userId);
  
  return res.status(httpStatus.OK).send(result);
}

export async function deleteComment(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const commentId = Number(req.params.commentId);
  if (!commentId) throw badRequest("commentId must be a valid number")

  const result = await commentServices.deleteComment(Number(commentId), user.userId);
  return res.status(httpStatus.NO_CONTENT).send(result);
}
