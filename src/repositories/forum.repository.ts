import { ForumCategory } from '@prisma/client';
import prisma from '@/database/db.connection';


const post = {
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
};

async function findForum(category: ForumCategory) {
  return prisma.forum.findMany({
    where: { category },
    select: {
      category: true,
      post,
    },
  });
}

async function findAllForums() {
  return prisma.forum.findMany({
    select: {
      category: true,
      post,
    },
  });
}

export const ForumRepository = {
  findForum, findAllForums
};
