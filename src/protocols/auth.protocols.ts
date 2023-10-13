import { UserCategory } from '@prisma/client';

export type UserCredentials = {
  userId: number;
  role: UserCategory;
};
