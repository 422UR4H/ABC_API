import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { newsService } from '@/services';
import { NewsCreateBody, NewsUpdateBody, NewsParams, UserCredentials } from '@/protocols';

export async function getNews(_req: Request, res: Response) {
  const result = await newsService.getNews();
  return res.status(httpStatus.CREATED).send(result);
}

export async function getNewsById(req: Request, res: Response) {
  const { newsId } = req.params as NewsParams;

  const result = await newsService.getNewsById(Number(newsId));
  return res.status(httpStatus.OK).send(result);
}

export async function addNews(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const data = req.body as NewsCreateBody;
  const result = await newsService.addNews(user, data);
  return res.status(httpStatus.CREATED).send(result);
}

export async function editNews(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const { newsId } = req.params as NewsParams;
  const data = req.body as NewsUpdateBody;
  const result = await newsService.editNews(user, { id: Number(newsId), author: user.userId, ...data });
  return res.status(httpStatus.OK).send(result);
}

export async function deleteNews(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const { newsId } = req.params as NewsParams;
  const result = await newsService.deleteNews(user, Number(newsId));
  return res.status(httpStatus.NO_CONTENT).send(result);
}
