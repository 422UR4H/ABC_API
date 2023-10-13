import Joi from "joi";
import { CommentCreateInput, CommentIdParam } from "@/protocols/comments.protocols";

export const commentBody = Joi.object<CommentCreateInput>({
    postId: Joi.number().integer().min(1).required(),
    text: Joi.string().max(128).required(),
});

export const commentIdParam = Joi.object<CommentIdParam>({
    id: Joi.number().integer().min(1).required()
});