import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { forumService } from '@/services';
import { ForumParams } from '@/protocols';

export async function getForum(req: Request, res: Response) {
  const { category } = req.params as ForumParams;
  const result = await forumService.findForum(category);
  return res.status(httpStatus.OK).send(result);
}

export async function getAllForums(_req: Request, res: Response) {
  const result = await forumService.findAllForums();
  return res.status(httpStatus.OK).send(result);
}
