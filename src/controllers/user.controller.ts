import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { userService } from '@/services';
import { UserCreateInput } from '@/protocols';

export async function createUser(req: Request, res: Response) {
  const data = req.body as UserCreateInput;

  const user = await userService.createUser(data);

  return res.status(httpStatus.CREATED).send({ id: user.id, email: user.id });
}
