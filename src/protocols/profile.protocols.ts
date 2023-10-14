import { Address, Profile } from "@prisma/client";
import { SystemInfo } from "./auth.protocols";

export type ProfileCreateBody = Omit<Profile, "id" | SystemInfo>;
export type ProfileUpdateBody = Omit<Profile, SystemInfo>;
export type ProfileWithAddress = Profile | null & Address | null;
export type ProfileIdParam = Pick<Profile, 'id'>;