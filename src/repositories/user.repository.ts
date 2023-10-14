import { UserCreateInput } from '@/protocols/user.protocols';
import { User, UserValidationStatus } from '@prisma/client';
import prisma from '@/database/db.connection';

async function createUser(data: UserCreateInput): Promise<User> {
  return prisma.user.create({ data });
}

async function findUserByEmail(email: string) {
  return prisma.user.findUnique({ where: { email } });
}

async function updateUserStatus(userId: number, status: UserValidationStatus) {
  return prisma.user.update({ where: { id: userId }, data: { status }, select: { status: true } });
}

export const userRepository = { createUser, findUserByEmail, updateUserStatus };
