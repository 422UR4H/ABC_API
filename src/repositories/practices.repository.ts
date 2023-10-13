import { Practice } from '@prisma/client';
import prisma from '@/database/db.connection';
import { PracticeCreateInput, PracticeUpdateInput } from '@/protocols';

async function createPractice(data: PracticeCreateInput): Promise<Practice> {
  return prisma.practice.create({
    data,
  });
}

async function getPractice() {
  return prisma.practice.findMany({
    select: { id: true, name: true, practiceAdvantage: { select: { id: true, advantage: true, description: true } } },
  });
}

async function updatePractice(data: PracticeUpdateInput): Promise<Practice> {
  return prisma.practice.update({
    where: { id: data.id },
    data: {
      name: data.name,
    },
  });
}

async function upsertPracticeAdvantage(advantage: string, description: string, practiceId: number) {
  return await prisma.practiceAdvantage.upsert({
    where: { practiceId },
    create: { advantage, description, practiceId },
    update: { advantage, description },
  });
}

async function deletePractice(practiceId: number) {
  return prisma.practice.delete({ where: { id: practiceId } });
}

export const practiceRepository = {
  createPractice,
  getPractice,
  updatePractice,
  upsertPracticeAdvantage,
  deletePractice,
};
