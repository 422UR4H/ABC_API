import { profileRepository } from '@/repositories';
import { notFound, unauthorized } from '@/errors/customErrors';
import { ProfileCreateBody, ProfileUpdateBody } from '@/protocols/profile.protocols';
import { AddressCreateBody, AddressUpdateBody } from '@/protocols/address.protocols';

export async function createProfileAndAddress(profile: ProfileCreateBody, address: AddressCreateBody) {
    return await profileRepository.createProfileAndAddress(profile, address);
}

export async function findProfileAndAddressByUserId(userId: number) {
    return await profileRepository.findProfileAndAddressByUserId(userId);
}

export async function updateProfileAndAddress(userId: number, profile: ProfileUpdateBody, address: AddressUpdateBody) {
    const result = await profileRepository.findProfileById(profile.id);

    if (result == null) throw notFound("profile");
    if (result.userId !== userId) throw unauthorized();

    return await profileRepository.updateProfileAndAddress(profile, address);
}

export async function deleteProfileAndAddress(profileId: number, userId: number) {
    const profile = await profileRepository.findProfileById(profileId);

    if (profile == null) throw notFound("profile");
    if (profile.userId !== userId) throw unauthorized();

    return await profileRepository.deleteProfile(profileId);
}

export const profileServices = {
    createProfileAndAddress,
    findProfileAndAddressByUserId,
    updateProfileAndAddress,
    deleteProfileAndAddress,
};
