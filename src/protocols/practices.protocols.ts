import { Practice, PracticeAdvantage } from "@prisma/client";
import { SystemInfo } from "./auth.protocols";

export type PracticeCreateInput = Omit<Practice, SystemInfo | "id">; // FIXME: refactor createdAt and updatedAt to | SystemInfo
export type PracticeUpdateInput = Omit<Practice, SystemInfo>; // FIXME: refactor createdAt and updatedAt to | SystemInfo
export type PracticeAdvantageUpsert = Omit<PracticeAdvantage, SystemInfo | "id" | "practiceId">;
export type PracticeParams = {
    practiceId: string | number;
};