import { ForumRepository } from '@/repositories';
import { ForumCategory } from '@prisma/client';

async function findForum(category: string) {
    return await ForumRepository.findForum(category.toUpperCase() as ForumCategory);
}

async function findAllForums() {
    return await ForumRepository.findAllForums();
}

export const forumService = { findForum, findAllForums };
