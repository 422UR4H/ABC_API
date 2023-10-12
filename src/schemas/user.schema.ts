import Joi from 'joi';
import { UserCreateInput } from '@/repositories/user.repository';

export const createUserSchema = Joi.object<UserCreateInput>({
  name: Joi.string().required(),
  nickName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
