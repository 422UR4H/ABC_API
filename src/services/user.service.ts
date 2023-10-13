import bcrypt from 'bcrypt';
import customErrors from '@/errors/customErrors';
import { userRepository } from '@/repositories/user.repository';
import { UserCreateInput } from '@/protocols/user.protocols';


async function searchUserByEmail(email: string) {
  const result = await userRepository.findUserByEmail(email);
  if (result) throw customErrors.conflict('Email já cadastrado');
}

export async function createUser({ email, password, ...data }: UserCreateInput) {
  await searchUserByEmail(email);

  const hashedPassword = await bcrypt.hash(password, 12);

  return userRepository.createUser({
    ...data,
    email,
    password: hashedPassword,
  });
}

export const userService = { createUser };
