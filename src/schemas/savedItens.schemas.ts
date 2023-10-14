import Joi from 'joi';
import { SaveItensBody } from '@/protocols';

export const savedItensSchema = Joi.object<SaveItensBody>({
  newsId: Joi.number().integer(),
  postId: Joi.number().integer(),
}).nand('newsId', 'postId');
