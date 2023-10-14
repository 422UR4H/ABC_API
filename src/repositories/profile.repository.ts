import prisma from '@/database/db.connection';
import { AddressCreateBody, AddressUpdateBody } from '@/protocols/address.protocols';
import { ProfileCreateBody, ProfileUpdateBody, ProfileWithAddress } from '@/protocols/profile.protocols';
import { Profile } from '@prisma/client';


async function createProfileAndAddress(profile: ProfileCreateBody, address: AddressCreateBody): Promise<ProfileWithAddress> {
    return prisma.profile.create({
        data: {
            ...profile,
            address: { create: address }
        },
        include: { address: true }
    });
}

async function findProfileById(id: number): Promise<Profile | null> {
    return prisma.profile.findFirst({
        where: { id }
    });
}

async function findProfileAndAddressByUserId(userId: number): Promise<ProfileWithAddress> {
    return prisma.profile.findFirst({
        where: { userId },
        include: { address: true }
    });
}

async function updateProfileAndAddress(profile: ProfileUpdateBody, address: AddressUpdateBody): Promise<ProfileWithAddress> {
    return prisma.profile.update({
        where: { id: profile.id },
        data: {
            ...profile,
            address: { create: address }
        },
        include: { address: true }
    });
}

async function deleteProfile(profileId: number): Promise<ProfileWithAddress> {
    return prisma.profile.delete({
        where: { id: profileId },
        include: { address: true }
    });
}

export const profileRepository = {
    createProfileAndAddress,
    findProfileById,
    findProfileAndAddressByUserId,
    updateProfileAndAddress,
    deleteProfile,
};
