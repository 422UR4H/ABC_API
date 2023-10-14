import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { profileServices } from '@/services';
import { badRequest } from '@/errors/customErrors';
import { ProfileCreateBody, ProfileUpdateBody } from '@/protocols/profile.protocols';
import { AddressCreateBody, AddressUpdateBody } from '@/protocols/address.protocols';
import { User } from '@prisma/client';

export async function createProfile(req: Request, res: Response) {
    const profile = req.body as ProfileCreateBody;
    const address = req.body as AddressCreateBody;
    const result = await profileServices.createProfileAndAddress(profile, address);

    return res.status(httpStatus.CREATED).send(result);
}

export async function getProfileByUserId(_req: Request, res: Response) {
    const { id } = res.locals.user as User;
    const result = await profileServices.findProfileAndAddressByUserId(id);

    return res.status(httpStatus.OK).send(result);
}

export async function updateProfile(req: Request, res: Response) {
    const profile = req.body as ProfileUpdateBody;
    const address = req.body as AddressUpdateBody;
    const { id } = res.locals.user as User;
    const result = await profileServices.updateProfileAndAddress(id, profile, address);

    return res.status(httpStatus.OK).send(result);
}

export async function deleteProfile(req: Request, res: Response) {
    const { id: userId } = res.locals.user as User;
    const profileId = Number(req.params.profileId);
    if (!profileId) throw badRequest('profileId must be a valid number');

    const result = await profileServices.deleteProfileAndAddress(profileId, userId);
    return res.status(httpStatus.NO_CONTENT).send(result);
}
