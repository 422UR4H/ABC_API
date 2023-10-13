import prisma from '@/database/db.connection';
import { SessionCreateInput } from '@/protocols';

async function createSession(data: SessionCreateInput) {
  return prisma.session.create({
    data,
  });
}

async function findSession(userId: number) {
  return prisma.session.findFirst({
    where: {
      userId,
    },
    include: { user: { select: { role: true } } },
  });
}

export const authRepository = {
  createSession,
  findSession,
};
