import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { savedItensServices } from '@/services';
import { SaveItensBody, UserCredentials } from '@/protocols';

export async function addSavedItem(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const data = req.body as SaveItensBody;

  const result = await savedItensServices.addSavedItens(user, data);
  return res.status(httpStatus.CREATED).send(result);
}

export async function deleteSavedItens(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const data = req.body as SaveItensBody;

  const result = await savedItensServices.deleteSavedItens(user, data);
  return res.status(httpStatus.NO_CONTENT).send(result);
}

export async function getSavedItens(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;

  const result = await savedItensServices.getSavedItems(user);
  return res.status(httpStatus.OK).send(result);
}
