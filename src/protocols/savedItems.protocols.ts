import { SavedPost, SavedNews } from '@prisma/client';
import { SystemInfo } from './auth.protocols';

export type SavePostCreateDeleteInput = Omit<SavedPost, SystemInfo | 'id'>;
export type SavePostCreateBody = Omit<SavedPost, SystemInfo | 'id' | 'userId'>;

export type SaveNewsCreateDeleteInput = Omit<SavedNews, SystemInfo | 'id'>;
export type SaveNewsCreateBody = Omit<SavedNews, SystemInfo | 'id' | 'userId'>;
