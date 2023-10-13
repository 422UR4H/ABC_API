import prisma from "@/database/db.connection";
import { ProductCreateInput, ProductUpdateInput } from "@/protocols/products.protocols";
import { Product } from "@prisma/client";

async function createProduct(data: ProductCreateInput): Promise<Product> {
  return prisma.product.create({
    data,
  });
}

async function getProduct(): Promise<Product[]> {
  return prisma.product.findMany();
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
              name: true,
              practiceAdvantage: {
                select: { advantage: true, description: true },
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

export const productRepository = {
  createProduct,
  getProduct,
  getProductByIdAndPractice,
  updateProduct,
  deleteProduct,
};