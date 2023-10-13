import { Post, Tags } from "@prisma/client";
import { SystemInfo } from "./auth.protocols";

export type TagsBody = Omit<Tags, 'id' | 'postId'>;
export type PostCreateBody = Omit<Post, SystemInfo | 'id' | 'author' | 'forumCategory'> & {
    tags: TagsBody[]
}
export type PostUpdateBody = Omit<Post, SystemInfo | 'author' | 'forumCategory'> & {
    tags: TagsBody[]
};
export type PostParams = {
    forumCategory: 'help' | 'news' | 'discutions',
    productId: number
};
// export type PostUpdateParams = {
//     forumCategory: 'help' | 'news' | 'discutions',
//     productId: number,
//     id: number
// };
export type PostIdParam = Pick<Post, 'id'>;
