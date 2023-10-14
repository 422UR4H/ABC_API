import prisma from '@/database/db.connection';

async function addToValidatePractices(userId: number, practiceId: number) {
  return prisma.userToValidatePractice.create({ data: { userId, practiceId } });
}

async function getToValidationPractices(userId: number, practiceId: number) {
  return prisma.userToValidatePractice.findUnique({ where: { toValidate_userId_practiceId: { userId, practiceId } } });
}
async function removeToValidatePractices(userId: number, practiceId: number) {
  return prisma.userToValidatePractice.delete({ where: { toValidate_userId_practiceId: { userId, practiceId } } });
}

async function addValidatedPractices(userId: number, practiceId: number) {
  return prisma.userValidatedPractice.create({ data: { userId, practiceId } });
}

async function getValidatedPractices(userId: number, practiceId: number) {
  return prisma.userValidatedPractice.findUnique({ where: { validated_userId_practiceId: { userId, practiceId } } });
}

async function totalUserValidatedPractices(userId: number) {
  return prisma.userValidatedPractice.aggregate({ where: { userId }, _count: { _all: true } });
}

export const validationPracticesRepository = {
  addToValidatePractices,
  getToValidationPractices,
  removeToValidatePractices,
  addValidatedPractices,
  getValidatedPractices,
  totalUserValidatedPractices,
};
