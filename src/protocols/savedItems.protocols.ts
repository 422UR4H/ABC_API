import { SavedPost, SavedNews } from '@prisma/client';
import { SystemInfo } from './auth.protocols';

export type SavePostCreateDeleteInput = Omit<SavedPost, SystemInfo | 'id'>;
export type SaveNewsCreateDeleteInput = Omit<SavedNews, SystemInfo | 'id'>;

export type SaveItensBody = {
  postId?: number;
  newsId?: number;
};
