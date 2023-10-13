import Joi from "joi";
import { PostCreateInput, PostCreateParams, PostIdParam, PostUpdateParams } from "@/protocols/post.protocols";

export const postBody = Joi.object<PostCreateInput>({
    title: Joi.string().max(64).required(),
    text: Joi.string().max(255).required(),
});

export const postCreateParams = Joi.object<PostCreateParams>({
    forumCategory: Joi.any().valid('help', 'news', 'discutions').required(),
    productId: Joi.number().integer().min(1).required(),
});

export const postUpdateParams = Joi.object<PostUpdateParams>({
    forumCategory: Joi.any().valid('help', 'news', 'discutions').required(),
    productId: Joi.number().integer().min(1).required(),
    id: Joi.number().integer().min(1).required(),
});

export const postIdParam = Joi.object<PostIdParam>({
    id: Joi.number().integer().min(1).required()
});