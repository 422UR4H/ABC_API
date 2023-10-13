import { ForumCategory } from '@prisma/client';
import { postRepository } from '@/repositories/';
import { PostCreateInput, PostUpdateInput, PostCreateBody, PostUpdateBody } from '@/protocols/';
import { notFound, unauthorized } from '@/errors/customErrors';

export async function createPost(post: PostCreateBody, userId: number, forumCategory: ForumCategory) {
  return await postRepository.createPost(post, userId, forumCategory);
}

export async function findPostsByUserId(userId: number) {
  return await postRepository.findPostsWithCommentsByUserId(userId);
}

export async function updatePost(post: PostUpdateBody, userId: number, forumCategory: ForumCategory) {
  const result = await postRepository.findPostsById(post.id);

  if (result == null) throw notFound('post');
  if (result.author !== userId) throw unauthorized();

  return await postRepository.updatePost(post, userId, forumCategory);
}

export async function deletePost(postId: number, userId: number) {
  const post = await postRepository.findPostsById(postId);

  if (post == null) throw notFound('post');
  if (post.author !== userId) throw unauthorized();

  return await postRepository.deletePost(postId);
}

export const postServices = {
  createPost,
  findPostsByUserId,
  updatePost,
  deletePost,
};
