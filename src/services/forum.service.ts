import { ForumRepository } from '@/repositories';
import { ForumCategory } from '@prisma/client';

async function findForum(category: string) {
    return await ForumRepository.getForum(category.toUpperCase() as ForumCategory);
}

export const forumService = { findForum };
