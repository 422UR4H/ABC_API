import { UserCreateInput } from '@/protocols/user.protocols';
import Joi from 'joi';

export const createUserSchema = Joi.object<UserCreateInput>({
  name: Joi.string().required(),
  nickName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
