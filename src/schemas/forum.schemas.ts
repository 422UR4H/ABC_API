import { PostCreateInput } from '@/protocols/post.protocols';
import Joi from 'joi';

export const postBody = Joi.object<PostCreateInput>({
  
});
