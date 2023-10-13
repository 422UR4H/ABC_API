import { User } from '@prisma/client';
import prisma from '@/database/db.connection';

async function createUser(data: UserCreateInput): Promise<User> {
  return prisma.user.create({ data });
}

async function findUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

export type UserCreateInput = Omit<User, 'id' | 'createdAt' | 'updatedAt'>;

export const userRepository = { createUser, findUserByEmail };
