import { Post, Tags } from '@prisma/client';
import { SystemInfo } from './auth.protocols';

export type TagsBody = Omit<Tags, SystemInfo | 'id' | 'postId'>;

export type PostCreateBody = Omit<Post, SystemInfo | 'id' | 'author' | 'forumCategory'> & {
  tags: TagsBody[];
};
export type PostUpdateBody = Omit<Post, SystemInfo | 'author' | 'forumCategory'> & {
  tags: TagsBody[];
};
export type PostParams = {
  forumCategory: 'help' | 'news' | 'discussions';
  productId: number;
};

export type PostIdParam = Pick<Post, 'id'>;
