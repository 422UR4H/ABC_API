import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { userProductsService } from '@/services';
import { ProductParams, UserCredentials } from '@/protocols';

export async function addUserProduct(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const { productId } = req.params as ProductParams;

  const result = await userProductsService.addUserProduct(user.userId, Number(productId));

  return res.status(httpStatus.CREATED).send(result);
}

export async function getUserProduct(_req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;

  const result = await userProductsService.getUserProducts(user.userId);
  return res.status(httpStatus.OK).send(result);
}

export async function getUserProductById(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const { productId } = req.params as ProductParams;
  const result = await userProductsService.getUserProductsById(user.userId, Number(productId));
  return res.status(httpStatus.OK).send(result);
}

export async function deleteUserProduct(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const { productId } = req.params as ProductParams;
  const result = await userProductsService.deleteUserProducts(user.userId, Number(productId));
  return res.status(httpStatus.NO_CONTENT).send(result);
}
