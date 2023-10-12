import Joi from "joi";
import {
    PracticeCreateInput,
    PracticeAdvantageUpsert,
} from "@/protocols/practices.protocols";
import { PracticeParams } from "@/protocols/practices.protocols";

export const practiceBody = Joi.object<PracticeCreateInput>({
    name: Joi.string().required(),
});

export const practiceParams = Joi.object<PracticeParams>({
    practiceId: Joi.number().required(),
});

export const practiceAdvantageBody = Joi.object<PracticeAdvantageUpsert>({
    advantage: Joi.string().required(),
    description: Joi.string().required(),
});