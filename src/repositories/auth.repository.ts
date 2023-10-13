import { Session, User } from '@prisma/client';
import prisma from '@/database/db.connection';

async function createSession(data: SessionCreateInput) {
  return prisma.session.create({
    data,
  });
}

async function findSession(token: string) {
  return prisma.session.findFirst({
    where: {
      token,
    },
    include: { User: { select: { role: true } } },
  });
}

export type SessionCreateInput = Omit<Session, 'id' | 'createdAt' | 'updatedAt'>;

export type SignInSession = Omit<User, 'id' | 'name' | 'nickName' | 'createdAt' | 'updatedAt'>;

export const authRepository = {
  createSession,
  findSession,
};
