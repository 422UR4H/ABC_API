import { productsRepository } from '@/repositories';
import { UserCredentials } from '@/protocols';
import { unauthorized } from '@/errors/customErrors';

export async function createProduct(name: string, user: UserCredentials) {
  if (user.role === 'ADMIN') throw unauthorized('Usuario não tem permissão');

  return await productsRepository.createProduct({ name });
}

export async function getProduct() {
  return await productsRepository.getProduct();
}

export async function getProductByIdAndPractice(productId: number) {
  return await productsRepository.getProductByIdAndPractice(productId);
}

export async function updateProduct(id: number, name: string, user: UserCredentials) {
  if (user.role === 'ADMIN') throw unauthorized('Usuario não tem permissão');
  return await productsRepository.updateProduct({ id, name });
}

export async function deleteProduct(productId: number, user: UserCredentials) {
  if (user.role === 'ADMIN') throw unauthorized('Usuario não tem permissão');

  return await productsRepository.deleteProduct(productId);
}

export const productsServices = {
  createProduct,
  getProduct,
  getProductByIdAndPractice,
  updateProduct,
  deleteProduct,
};
