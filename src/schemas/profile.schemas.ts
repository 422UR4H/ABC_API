import Joi from "joi";
import {
    ProfileCreateBody,
    ProfileIdParam,
    ProfileUpdateBody
} from "@/protocols/profile.protocols";


export const profileCreateBody = Joi.object<ProfileCreateBody>({
    cpfOrCpnj: Joi.string().length(11).required(),
    userId: Joi.number().integer().required(),
});

export const profileUpdateBody = Joi.object<ProfileUpdateBody>({
    id: Joi.number().integer().required(),
    cpfOrCpnj: Joi.string().length(11).required(),
    userId: Joi.number().integer().required(),
});

export const profileIdParam = Joi.object<ProfileIdParam>({
    id: Joi.number().integer().min(1).required()
});
