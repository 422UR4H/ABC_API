import { userProductsRepository, productsRepository } from '@/repositories';
import {} from '@/protocols';
import { notFound } from '@/errors/customErrors';

async function addUserProduct(userId: number, productId: number) {
  const product = await productsRepository.getProductByIdAndPractice(productId);
  if (!product) throw notFound('Produto não encontrado');

  return await userProductsRepository.addProduct({ userId, productId });
}

async function getUserProducts(userId: number) {
  return await userProductsRepository.getUserProducts(userId);
}

async function getUserProductsById(userId: number, productId: number) {
  return await userProductsRepository.getUserProductsById(userId, productId);
}

async function deleteUserProducts(userId: number, productId: number) {
  const product = await productsRepository.getProductByIdAndPractice(productId);
  if (!product) throw notFound('Produto não encontrado');

  return await userProductsRepository.deleteUserProduct(userId, productId);
}

export const userProductsService = { addUserProduct, getUserProducts, getUserProductsById, deleteUserProducts };
