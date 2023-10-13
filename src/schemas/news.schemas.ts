import Joi from 'joi';
import { NewsCreateBody, NewsUpdateBody, NewsParams } from '@/protocols';

export const newsCreateSchema = Joi.object<NewsCreateBody>({
  text: Joi.string().required(),
  title: Joi.string().required(),
  source: Joi.string().required(),
});

export const newsUpdateSchema = Joi.object<NewsUpdateBody>({
  text: Joi.string().required(),
  title: Joi.string().required(),
  source: Joi.string().required(),
});

export const newsParamsSchema = Joi.object<NewsParams>({
  newsId: Joi.number().integer().required(),
});
