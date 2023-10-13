import { UserProduct } from '@prisma/client';
import { SystemInfo } from './auth.protocols';

export type UserProductCreateInput = Omit<UserProduct, SystemInfo | 'id'>;
