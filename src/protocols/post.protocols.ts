import { Post } from "@prisma/client";
import { SystemInfo } from "./auth.protocols";

export type PostCreateInput = Omit<Post, SystemInfo | "id">;
export type PostUpdateInput = Omit<Post, SystemInfo>;
export type PostParams = Pick<Post, 'id'>;
