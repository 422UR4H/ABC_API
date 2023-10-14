import { Router } from 'express';
import { validateAuth, validateBody, validateParams } from '@/middlewares';
import { profileCreateBody, profileUpdateBody, profileIdParam } from '@/schemas';
import { getProfileByUserId, createProfile, deleteProfile, updateProfile } from '@/controllers';

const profileRouter = Router();

profileRouter
    .all('/*', validateAuth)
    .get('/', getProfileByUserId)
    .post('/', validateBody(profileCreateBody), createProfile)
    .put('/', validateBody(profileUpdateBody), updateProfile)
    .delete('/:profileId', validateParams(profileIdParam), deleteProfile);
export { profileRouter };
