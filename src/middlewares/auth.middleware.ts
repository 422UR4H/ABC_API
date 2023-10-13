import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { authRepository } from '@/repositories';
import { UserCredentials } from '@/protocols';
import { unauthorized } from '@/errors/customErrors';

export async function validateAuth(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.header('Authorization');
  if (!authHeader) throw unauthorized('Usuario não está logado');

  const token = authHeader.split(' ')[1];
  if (!token) throw unauthorized('Usuario não está logado');

  const { userId } = jwt.verify(token, process.env.JWT_SECRET || 'development') as JWTPayload;

  const session = await authRepository.findSession(token);
  if (!session) throw unauthorized('Usuario não está logado');

  const user: UserCredentials = { userId, role: session.user.role };

  res.locals.user = user;
  return next();
}

type JWTPayload = {
  userId: number;
};
