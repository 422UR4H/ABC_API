import Joi from 'joi';
import { SignInSession } from '@/protocols';

export const signInSchema = Joi.object<SignInSession>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
