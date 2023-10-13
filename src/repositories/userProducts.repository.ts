import prisma from '@/database/db.connection';
import { UserProductCreateInput } from '@/protocols';

async function addProduct(data: UserProductCreateInput) {
  return await prisma.userProduct.create({
    data,
    select: {
      product: {
        select: {
          id: true,
          name: true,
          practiceProduct: {
            select: {
              practice: {
                select: {
                  id: true,
                  name: true,
                  practiceAdvantage: { select: { id: true, advantage: true, description: true } },
                },
              },
            },
          },
        },
      },
    },
  });
}

async function getUserProducts(userId: number) {
  return prisma.userProduct.findMany({
    where: { userId },
    select: {
      product: {
        select: {
          id: true,
          name: true,
          practiceProduct: {
            select: {
              practice: {
                select: {
                  id: true,
                  name: true,
                  practiceAdvantage: { select: { id: true, advantage: true, description: true } },
                },
              },
            },
          },
        },
      },
    },
  });
}

async function getUserProductsById(userId: number, productId: number) {
  return prisma.userProduct.findUnique({
    where: {
      userId_productId: {
        productId,
        userId,
      },
    },
    select: {
      product: {
        select: {
          id: true,
          name: true,
          practiceProduct: {
            select: {
              practice: {
                select: {
                  id: true,
                  name: true,
                  practiceAdvantage: { select: { id: true, advantage: true, description: true } },
                },
              },
            },
          },
        },
      },
    },
  });
}

async function deleteUserProduct(userId: number, productId: number) {
  return prisma.userProduct.delete({
    where: {
      userId_productId: {
        productId,
        userId,
      },
    },
  });
}

export const userProductsRepository = { addProduct, getUserProducts, getUserProductsById, deleteUserProduct };
