import { notFound, unauthorized } from '@/errors/customErrors';
import { PostCreateInput, PostUpdateInput } from '@/protocols/post.protocols';
import { postRepository } from '@/repositories/post.repository';
import { ForumCategory } from '@prisma/client';

export async function createPost(post: PostCreateInput, userId: number, forumCategory: ForumCategory) {
    return await postRepository.createPost(post, userId, forumCategory);
}

export async function findPostsByUserId(userId: number) {
    return await postRepository.findPostsByUserId(userId);
}

export async function updatePost(post: PostUpdateInput, userId: number, forumCategory: ForumCategory) {
    const result = await postRepository.findPostsById(post.id);

    if (result == null) throw notFound("post");
    if (result.author !== userId) throw unauthorized();

    return await postRepository.updatePost(post, forumCategory);
}

export async function deletePost(postId: number, userId: number) {
    const post = await postRepository.findPostsById(postId);

    if (post == null) throw notFound("post");
    if (post.author !== userId) throw unauthorized();

    return await postRepository.deletePost(postId);
}

export const postServices = {
    createPost,
    findPostsByUserId,
    updatePost,
    deletePost,
};
