import { Router } from 'express';
import { validateParams } from '@/middlewares/schema.middleware';
import { forumParams } from '@/schemas/forum.schemas';
import { getForum } from '@/controllers/forum.controller';

const forumRouter = Router();

forumRouter.get('/', validateParams(forumParams), getForum);

export { forumRouter };
