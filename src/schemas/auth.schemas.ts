import { SignInSession } from '@/protocols/auth.protocols';
import Joi from 'joi';

export const signInSchema = Joi.object<SignInSession>({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});
