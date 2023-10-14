import { Address } from "@prisma/client";
import { SystemInfo } from "./auth.protocols";

export type AddressCreateBody = Omit<Address, "id" | SystemInfo>;
export type AddressUpdateBody = Omit<Address, SystemInfo>;
