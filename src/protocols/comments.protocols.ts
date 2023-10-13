import { Comment } from "@prisma/client";
import { SystemInfo } from "./auth.protocols";

export type CommentCreateInput = Omit<Comment, SystemInfo | 'id' | 'userId'>;
export type CommentUpdateInput = Omit<Comment, SystemInfo | 'userId'>;
export type CommentIdParam = Pick<Comment, 'id'>;
