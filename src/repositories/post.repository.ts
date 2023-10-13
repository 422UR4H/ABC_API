import { ForumCategory, Post } from '@prisma/client';
import prisma from '@/database/db.connection';
import { PostCreateBody, PostUpdateBody } from '@/protocols/post.protocols';
import { notFound } from '@/errors/customErrors';

async function createPost(post: PostCreateBody, author: number, forumCategory: ForumCategory) {
    const { tags, ...inputData } = post;
    const data = { author, forumCategory, ...inputData };
    const result = await prisma.$transaction(async () => {
        const post = await prisma.post.create({ data });

        if (post == null) throw notFound("post");
        const dataTag = Array.from({ length: tags.length }).map((_t, i) => ({
            postId: post.id,
            productId: tags[i].productId
        }));
        prisma.tags.createMany({ data: dataTag });
    });
    return result;
}

async function findPostsWithCommentsByUserId(author: number) {
    return prisma.post.findMany({
        where: { author },
        include: {
            comment: {
                select: {
                    id: true,
                    userId: true,
                    text: true,
                    createdAt: true,
                    updatedAt: true,
                }
            }
        }
    });
}

async function findPostsById(id: number): Promise<Post | null> {
    return prisma.post.findUnique({ where: { id } });
}

async function updatePost(post: PostUpdateBody, userId: number, forumCategory: ForumCategory) {
    const { tags, ...inputData } = post;
    const data = { forumCategory, author: userId, ...inputData };
    const result = await prisma.$transaction(async () => {
        const post = await prisma.post.update({ data });
        if (post == null) throw notFound("post");
        const dataTag = Array.from({ length: tags.length }).map((_t, i) => ({
            postId: post.id,
            productId: tags[i].productId
        }));
        prisma.tags.createMany({ data: dataTag });
    });
    return result;
}

async function deletePost(id: number) {
    return prisma.post.delete({ where: { id } });
}

export const postRepository = {
    createPost,
    findPostsWithCommentsByUserId,
    findPostsById,
    updatePost,
    deletePost,
};
