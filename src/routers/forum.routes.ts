import { Router } from 'express';
import { validateParams } from '@/middlewares';
import { forumParams } from '@/schemas/';
import { getForum } from '@/controllers';

const forumRouter = Router();

forumRouter.get('/:category', validateParams(forumParams), getForum);

export { forumRouter };
