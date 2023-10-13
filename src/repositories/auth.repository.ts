import prisma from '@/database/db.connection';
import { SessionCreateInput } from '@/protocols/auth.protocols';

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

export const authRepository = {
  createSession,
  findSession,
};
