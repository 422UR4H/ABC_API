import { ForumCategory, Post } from '@prisma/client';
import prisma from '@/database/db.connection';
import { PostCreateInput, PostUpdateInput } from '@/protocols/post.protocols';

async function createPost(post: PostCreateInput, author: number, forumCategory: ForumCategory): Promise<Post> {
  return prisma.post.create({ data: { ...post, author, forumCategory } });
}

async function findPostsByUserId(author: number): Promise<Post[]> {
  return prisma.post.findMany({ where: { author } });
}

async function findPostsById(id: number): Promise<Post | null> {
  return prisma.post.findUnique({ where: { id } });
}

async function updatePost(post: PostUpdateInput, forumCategory: ForumCategory): Promise<Post> {
  const { id, text, title } = post;
  return prisma.post.update({
    where: { id },
    data: { forumCategory, title, text },
  });
}

async function deletePost(id: number) {
  return prisma.post.delete({ where: { id } });
}

export const postRepository = {
  createPost,
  findPostsByUserId,
  findPostsById,
  updatePost,
  deletePost,
};
