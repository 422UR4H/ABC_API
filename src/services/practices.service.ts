import { practiceRepository } from '@/repositories';
import { UserCredentials } from '@/protocols';
import { unauthorized } from '@/errors/customErrors';

export async function createPractice(name: string, user: UserCredentials) {
  if (user.role !== 'ADMIN') throw unauthorized('Usuario não tem permissão');

  return await practiceRepository.createPractice({ name });
}

export async function getPractice() {
  return await practiceRepository.getPractice();
}

export async function updatePractice(id: number, name: string, user: UserCredentials) {
  if (user.role !== 'ADMIN') throw unauthorized('Usuario não tem permissão');

  return await practiceRepository.updatePractice({ id, name });
}

export async function upsertPracticeAdvantage(
  advantage: string,
  description: string,
  practiceId: number,
  user: UserCredentials,
) {
  if (user.role !== 'ADMIN') throw unauthorized('Usuario não tem permissão');

  return await practiceRepository.upsertPracticeAdvantage(advantage, description, practiceId);
}

export async function deletePractice(practiceId: number, user: UserCredentials) {
  if (user.role !== 'ADMIN') throw unauthorized('Usuario não tem permissão');

  return await practiceRepository.deletePractice(practiceId);
}

export const practiceServices = {
  createPractice,
  getPractice,
  updatePractice,
  upsertPracticeAdvantage,
  deletePractice,
};
