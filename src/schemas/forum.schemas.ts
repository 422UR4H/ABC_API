import { ForumParams } from '@/protocols';
import Joi from 'joi';

export const forumParams = Joi.object<ForumParams>({
  category: Joi.any().valid('help', 'news', 'discutions').required()
});
