import { Comment } from '@prisma/client';
import prisma from '@/database/db.connection';
import { CommentCreateInput, CommentUpdateInput } from '@/protocols/comments.protocols';

async function createComment(comment: CommentCreateInput, userId: number): Promise<Comment> {
    return prisma.comment.create({ data: { ...comment, userId } });
}

async function findCommentByUserId(userId: number): Promise<Comment[]> {
    return prisma.comment.findMany({ where: { userId } });
}

async function findCommentById(id: number): Promise<Comment | null> {
    return prisma.comment.findUnique({ where: { id } });
}

async function updateComment(comment: CommentUpdateInput): Promise<Comment> {
    const { id, text, postId } = comment;
    return prisma.comment.update({
        where: { id },
        data: { text, postId },
    });
}

async function deleteComment(id: number) {
    return prisma.comment.delete({ where: { id } });
}

export const commentRepository = {
    createComment,
    findCommentByUserId,
    findCommentById,
    updateComment,
    deleteComment,
};
