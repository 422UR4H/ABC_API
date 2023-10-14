import prisma from '@/database/db.connection';
import { SavePostCreateDeleteInput, SaveNewsCreateDeleteInput } from '@/protocols';

async function savePost(data: SavePostCreateDeleteInput) {
  return prisma.savedPost.create({ data });
}

async function deleteSavedPost(data: SavePostCreateDeleteInput) {
  return prisma.savedPost.delete({
    where: {
      saved_post_user_id_post_id: {
        postId: data.postId,
        userId: data.userId,
      },
    },
  });
}

async function saveNews(data: SaveNewsCreateDeleteInput) {
  return prisma.savedNews.create({ data });
}

async function deleteSavedNews(data: SaveNewsCreateDeleteInput) {
  return prisma.savedNews.delete({
    where: {
      saved_news_user_id_newsId: {
        newsId: data.newsId,
        userId: data.userId,
      },
    },
  });
}

async function getSavedItems(userId: number) {
  const data = await prisma.$transaction(async () => {
    const savedPosts = await prisma.savedPost.findMany({
      where: { userId },
      select: {
        post: {
          select: {
            id: true,
            title: true,
            text: true,
            author: true,
            user: { select: { id: true, name: true } },
            comment: { select: { id: true, text: true, user: { select: { id: true, name: true } } } },
          },
        },
      },
    });
    const savedNews = await prisma.savedNews.findMany({
      where: { userId },
      select: {
        news: {
          select: {
            id: true,
            title: true,
            text: true,
            author: true,
            source: true,
            user: { select: { id: true, name: true } },
          },
        },
      },
    });
    return { posts: savedPosts, news: savedNews };
  });
  return data;
}

export const savedItensRepository = { savePost, deleteSavedPost, saveNews, deleteSavedNews, getSavedItems };
