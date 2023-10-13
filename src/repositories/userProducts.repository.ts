import prisma from '@/database/db.connection';
import { UserProductCreateInput } from '@/protocols';

async function addProduct(data: UserProductCreateInput) {
  return await prisma.userProduct.create({
    data,
    include: {
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
  return prisma.userProduct.findFirst({
    where: { userId },
    include: {
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

export const userProductsRepository = { addProduct, getUserProducts };
