import { Post } from "@prisma/client";
import { SystemInfo } from "./auth.protocols";

export type PostCreateInput = Omit<Post, SystemInfo | 'id' | 'author' | 'forumCategory'>;
export type PostUpdateInput = Omit<Post, SystemInfo | 'author' | 'forumCategory'>;
export type PostCreateParams = {
    forumCategory: 'help' | 'news' | 'discutions',
    productId: number
};
export type PostUpdateParams = {
    forumCategory: 'help' | 'news' | 'discutions',
    productId: number,
    id: number
};
export type PostIdParam = Pick<Post, 'id'>;