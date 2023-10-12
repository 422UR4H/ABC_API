import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { SignInSession } from '@/repositories/auth.repository';
import { authService } from '@/services/auth.service';

export async function createSession(req: Request, res: Response) {
  const data = req.body as SignInSession;

  const result = await authService.createSession(data);
  return res.status(httpStatus.OK).send(result);
}
