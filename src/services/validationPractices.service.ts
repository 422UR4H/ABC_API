import { UserCredentials } from '@/protocols';
import { userRepository, validationPracticesRepository } from '@/repositories';
import { conflict, badRequest } from '@/errors/customErrors';
import { UserValidationStatus } from '@prisma/client';

async function addToValidatePractices(user: UserCredentials, practiceId: number) {
  const validated = await validationPracticesRepository.getValidatedPractices(user.userId, practiceId);
  if (validated) throw conflict('Usuario já validou essa pratica');

  return await validationPracticesRepository.addToValidatePractices(user.userId, practiceId);
}

async function addValidatedPractices(user: UserCredentials, practiceId: number) {
  const validation = await validationPracticesRepository.getToValidationPractices(user.userId, practiceId);
  if (!validation) throw badRequest('Pratica não estava para validação');

  const validated = await validationPracticesRepository.addValidatedPractices(user.userId, practiceId);

  await validationPracticesRepository.removeToValidatePractices(user.userId, practiceId);

  const total = await validationPracticesRepository.totalUserValidatedPractices(user.userId);

  const userStatus = await updateUserStatus(user.userId, total._count._all);
  return { validated, userStatus };
}

async function updateUserStatus(userId: number, total: number) {
  if (total > 4) {
    const status: UserValidationStatus = 'NIVEL2';
    return await userRepository.updateUserStatus(userId, status);
  } else if (total > 8) {
    const status: UserValidationStatus = 'NIVEL3';
    return await userRepository.updateUserStatus(userId, status);
  } else if (total > 12) {
    const status: UserValidationStatus = 'NIVEL4';
    return await userRepository.updateUserStatus(userId, status);
  } else if (total > 16) {
    const status: UserValidationStatus = 'NIVEL5';
    return await userRepository.updateUserStatus(userId, status);
  } else {
    return { status: UserValidationStatus.NIVEL1 };
  }
}

export const validationPracticesService = { addToValidatePractices, addValidatedPractices };
