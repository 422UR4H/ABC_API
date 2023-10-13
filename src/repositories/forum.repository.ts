import { Forum, ForumCategory } from '@prisma/client';
import prisma from '@/database/db.connection';

async function getForum(category: ForumCategory): Promise<Forum[]> {
    return prisma.forum.findMany({
        where: { category }
    });
}

export const ForumRepository = {
    getForum,
};
