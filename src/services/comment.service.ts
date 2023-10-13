import { notFound, unauthorized } from '@/errors/customErrors';
import { CommentCreateInput, CommentUpdateInput } from '@/protocols/comments.protocols';
import { commentRepository } from '@/repositories/comment.reopsitory';


export async function createComment(comment: CommentCreateInput, userId: number) {
    return await commentRepository.createComment(comment, userId);
}

export async function findCommentByUserId(userId: number) {
    return await commentRepository.findCommentByUserId(userId);
}

export async function updateComment(comment: CommentUpdateInput, userId: number) {
    const result = await commentRepository.findCommentById(comment.id);

    if (result == null) throw notFound("comment");
    if (result.userId !== userId) throw unauthorized();

    return await commentRepository.updateComment(comment);
}

export async function deleteComment(commentId: number, userId: number) {
    const comment = await commentRepository.findCommentById(commentId);

    if (comment == null) throw notFound("comment");
    if (comment.userId !== userId) throw unauthorized();

    return await commentRepository.deleteComment(commentId);
}

export const commentServices = {
    createComment,
    findCommentByUserId,
    updateComment,
    deleteComment,
};
