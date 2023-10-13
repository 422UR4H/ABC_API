import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { productsServices } from '@/services';
import { ProductCreateInput, ProductParams, UserCredentials } from '@/protocols';

export async function createProduct(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const { name } = req.body as ProductCreateInput;

  const result = await productsServices.createProduct(name, user);
  return res.status(httpStatus.CREATED).send(result);
}

export async function getProduct(_req: Request, res: Response) {
  const result = await productsServices.getProduct();
  return res.status(httpStatus.OK).send(result);
}

export async function getProductByIdAndPractice(req: Request, res: Response) {
  const { productId } = req.params as ProductParams;
  const result = await productsServices.getProductByIdAndPractice(Number(productId));
  return res.status(httpStatus.OK).send(result);
}

export async function updateProduct(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const { productId } = req.params as ProductParams;
  const { name } = req.body as ProductCreateInput;
  const result = await productsServices.updateProduct(Number(productId), name, user);
  return res.status(httpStatus.OK).send(result);
}

export async function deleteProduct(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const { productId } = req.params as ProductParams;
  const result = await productsServices.deleteProduct(Number(productId), user);
  return res.status(httpStatus.NO_CONTENT).send(result);
}
