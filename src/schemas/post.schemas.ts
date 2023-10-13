import Joi from "joi";
import {
    PostCreateBody, PostIdParam, PostParams, PostUpdateBody, TagsBody
} from "@/protocols/post.protocols";


export const postBody = Joi.object<PostCreateBody>({
    title: Joi.string().max(64).required(),
    text: Joi.string().max(255).required(),
    tags: Joi.array().items(Joi.object<TagsBody>({
        productId: Joi.number().integer().required()
    }).required()).required(),
});

export const postParams = Joi.object<PostParams>({
    forumCategory: Joi.any().valid('help', 'news', 'discutions').required(),
});

// export const postUpdateParams = Joi.object<PostUpdateParams>({
//     forumCategory: Joi.any().valid('help', 'news', 'discutions').required(),
//     productId: Joi.number().integer().required(),
//     id: Joi.number().integer().required(),
// });

export const postIdParam = Joi.object<PostIdParam>({
    id: Joi.number().integer().required()
});