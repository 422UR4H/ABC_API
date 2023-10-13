import { User } from "@prisma/client";
import { SystemInfo } from "./auth.protocols";

export type UserCreateInput = Omit<User, 'id' | SystemInfo>;