import { News } from '@prisma/client';
import { SystemInfo } from './auth.protocols';

export type NewsCreateInput = Omit<News, SystemInfo | 'id'>;
export type NewsCreateBody = Omit<News, SystemInfo | 'id' | 'author'>;
export type NewsUpdateInput = Omit<News, SystemInfo>;
export type NewsUpdateBody = Omit<News, SystemInfo | 'id' | 'author'>;
export type NewsParams = {
  newsId: Number | string;
};
