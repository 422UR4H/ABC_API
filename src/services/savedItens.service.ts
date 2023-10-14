import { SaveItensBody, UserCredentials } from '@/protocols';
import { savedItensRepository } from '@/repositories';

async function getSavedItems(user: UserCredentials) {
  const { userId } = user;
  return await savedItensRepository.getSavedItems(userId);
}

async function addSavedItens(user: UserCredentials, data: SaveItensBody) {
  if (!data.newsId) {
    return await savedItensRepository.savePost({ userId: user.userId, postId: Number(data.postId) });
  }
  if (!data.postId) {
    return await savedItensRepository.saveNews({ userId: user.userId, newsId: Number(data.newsId) });
  }
}

async function deleteSavedItens(user: UserCredentials, data: SaveItensBody) {
  if (!data.newsId) {
    return await savedItensRepository.deleteSavedPost({ userId: user.userId, postId: Number(data.postId) });
  }
  if (!data.postId) {
    return await savedItensRepository.deleteSavedNews({ userId: user.userId, newsId: Number(data.newsId) });
  }
}

export const savedItensServices = { getSavedItems, addSavedItens, deleteSavedItens };
