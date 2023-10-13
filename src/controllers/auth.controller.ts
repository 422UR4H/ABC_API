import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { SignInSession } from '@/repositories';
import { authService } from '@/services';

export async function createSession(req: Request, res: Response) {
  const data = req.body as SignInSession;

  const result = await authService.createSession(data);
  return res.status(httpStatus.OK).send(result);
}
