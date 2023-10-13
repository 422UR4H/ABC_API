import { Session, User } from "@prisma/client";

export type SystemInfo = "createdAt" | "updatedAt";
export type SessionCreateInput = Omit<Session, SystemInfo | 'id'>;
export type SignInSession = Omit<User, SystemInfo | 'id' | 'name' | 'nickName'>;
