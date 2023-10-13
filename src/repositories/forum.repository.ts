import { Forum, ForumCategory } from '@prisma/client';
import prisma from '@/database/db.connection';

async function getForum(category: ForumCategory) {
  return prisma.forum.findMany({
    where: { category },
    select: {
      category: true,
      post: {
        select: {
          id: true,
          title: true,
          text: true,
          author: true,
          createdAt: true,
          updatedAt: true,
          user: {
            select: {
              id: true,
              nickName: true,
              name: true,
            },
          },
          tags: {
            select: {
              id: true,
              product: {
                select: {
                  name: true,
                },
              },
            },
          },
          comment: {
            select: {
              id: true,
              text: true,
              createdAt: true,
              updatedAt: true,
              user: {
                select: {
                  id: true,
                  nickName: true,
                  name: true,
                },
              },
            },
          },
        },
      },
    },
  });
}

export const ForumRepository = {
  getForum,
};
