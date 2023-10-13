import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { authService } from '@/services/auth.service';
import { SignInSession } from '@/protocols';


export async function createSession(req: Request, res: Response) {
  const data = req.body as SignInSession;

  const result = await authService.createSession(data);
  return res.status(httpStatus.OK).send(result);
}
