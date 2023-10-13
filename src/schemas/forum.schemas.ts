import Joi from 'joi';
import { ForumParams } from '@/protocols';

export const forumParams = Joi.object<ForumParams>({
  category: Joi.any().valid('help', 'news', 'discutions').required(),
});
