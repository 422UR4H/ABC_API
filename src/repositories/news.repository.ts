import { News } from '@prisma/client';
import prisma from '@/database/db.connection';

async function getNews(): Promise<News[]> {
  return prisma.news.findMany({});
}

export const;
