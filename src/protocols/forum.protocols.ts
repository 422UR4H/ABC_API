import { Forum } from "@prisma/client";
import { SystemInfo } from "./auth.protocols";

export type ForumCreateInput = Omit<Forum, SystemInfo>;
export type ForumUpdateInput = ForumCreateInput;
export type ForumParams = Pick<Forum, 'category'>;
