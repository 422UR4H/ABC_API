import { News } from '@prisma/client';
import prisma from '@/database/db.connection';
import { NewsCreateInput, NewsUpdateInput } from '@/protocols/';

async function getNews(): Promise<News[]> {
  return prisma.news.findMany({});
}

async function getNewsById(newsId: number): Promise<News | null> {
  return prisma.news.findUnique({ where: { id: newsId } });
}

async function addNews(data: NewsCreateInput) {
  return prisma.news.create({ data });
}

async function editNews(inputData: NewsUpdateInput): Promise<News> {
  const { id, ...data } = inputData;
  return prisma.news.update({ where: { id }, data });
}

async function deleteNews(newsId: number) {
  return prisma.news.delete({ where: { id: newsId } });
}

export const newsRepository = { getNews, getNewsById, addNews, editNews, deleteNews };
