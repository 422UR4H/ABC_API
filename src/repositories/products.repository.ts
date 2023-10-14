import prisma from '@/database/db.connection';
import { ProductCreateInput, ProductUpdateInput } from '@/protocols/products.protocols';
import { Product } from '@prisma/client';

async function createProduct(data: ProductCreateInput): Promise<Product> {
  return prisma.product.create({
    data,
  });
}
 
async function getProduct() {
  return prisma.product.findMany({
    select: {
      id: true,
      name: true,
      practiceProduct: {
        select: {
          practice: {
            select: {
              id: true,
              name: true,
              practiceAdvantage: {
                select: { id: true, advantage: true, description: true },
              },
            },
          },
        },
      },
    },
  });
}

async function getProductByIdAndPractice(productId: number) {
  return prisma.product.findUnique({
    where: { id: productId },
    select: {
      id: true,
      name: true,
      practiceProduct: {
        select: {
          practice: {
            select: {
              id: true,
              name: true,
              practiceAdvantage: {
                select: { id: true, advantage: true, description: true },
              },
            },
          },
        },
      },
    },
  });
}

async function updateProduct(data: ProductUpdateInput): Promise<Product> {
  return prisma.product.update({
    where: { id: data.id },
    data: {
      name: data.name,
    },
  });
}

async function deleteProduct(productId: number) {
  return prisma.product.delete({ where: { id: productId } });
}

export const productsRepository = {
  createProduct,
  getProduct,
  getProductByIdAndPractice,
  updateProduct,
  deleteProduct,
};
