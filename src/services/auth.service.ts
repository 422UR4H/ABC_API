import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '@prisma/client';
import { SignInSession } from '@/protocols/auth.protocols';
import { authRepository } from '@/repositories/auth.repository';
import { userRepository } from '@/repositories/user.repository';
import { unauthorized, notFound } from '@/errors/customErrors';


export async function createSession({ email, password }: SignInSession) {
  const user = await getUser(email);

  await validatePassword(password, user.password);

  const token = await createToken(user.id);

  return {
    id: user.id,
    name: user.name,
    nickName: user.nickName,
    email: user.email,
    token,
  };
}

async function getUser(email: string): Promise<User> {
  const user = await userRepository.findUserByEmail(email);
  if (!user) throw unauthorized('Email ou Senha inválidos');
  return user;
}
async function validatePassword(password: string, userPassword: string) {
  const isPasswordValid = await bcrypt.compare(password, userPassword);
  if (!isPasswordValid) throw unauthorized('Email ou Senha inválidos');
}
async function createToken(userId: number) {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET || 'development');
  await authRepository.createSession({
    token,
    userId,
  });

  return token;
}

export const authService = { createSession };
