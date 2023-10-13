import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { postServices } from '@/services/post.service';
import { PostCreateBody, PostUpdateBody } from '@/protocols/post.protocols';
import { UserCredentials } from '@/protocols';
import { ForumCategory } from '@prisma/client';
import { badRequest } from '@/errors/customErrors';


export async function createPost(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const forumCategory = req.params.forumCategory.toUpperCase() as ForumCategory;
  const result = await postServices.createPost(req.body as PostCreateBody, user.userId, forumCategory);

  return res.status(httpStatus.CREATED).send(result);
}

export async function getPostsByUserId(_req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const result = await postServices.findPostsByUserId(user.userId);

  return res.status(httpStatus.OK).send(result);
}

export async function updatePost(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const forumCategory = req.params.forumCategory.toUpperCase() as ForumCategory;
  const result = await postServices.updatePost(req.body as PostUpdateBody, user.userId, forumCategory);

  return res.status(httpStatus.OK).send(result);
}

export async function deletePost(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const postId = Number(req.params.postId);
  if (!postId) throw badRequest("postId must be a valid number")

  const result = await postServices.deletePost(Number(postId), user.userId);
  return res.status(httpStatus.NO_CONTENT).send(result);
}
