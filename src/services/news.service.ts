import { newsRepository } from '@/repositories';
import { NewsCreateBody, NewsUpdateBody, NewsUpdateInput, UserCredentials } from '@/protocols';
import { notFound, unauthorized } from '@/errors/customErrors';

async function getNews() {
  return await newsRepository.getNews();
}

async function getNewsById(newsId: number) {
  const news = await newsRepository.getNewsById(newsId);
  if (!news) throw notFound('Noticia não encontrada');
  return news;
}

async function addNews(user: UserCredentials, inputData: NewsCreateBody) {
  if (user.role !== 'ADMIN') throw unauthorized('Usuario não tem permissão');
  return await newsRepository.addNews({ author: user.userId, ...inputData });
}

async function editNews(user: UserCredentials, inputData: NewsUpdateInput) {
  if (user.role !== 'ADMIN') throw unauthorized('Usuario não tem permissão');
  return await newsRepository.editNews(inputData);
}

async function deleteNews(user: UserCredentials, newsId: number) {
  if (user.role !== 'ADMIN') throw unauthorized('Usuario não tem permissão');
  return await newsRepository.deleteNews(newsId);
}

export const newsService = { getNews, getNewsById, addNews, editNews, deleteNews };
