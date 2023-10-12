import { Practice, PracticeAdvantage } from "@prisma/client";

export type SystemInfo = "createdAt" | "updatedAt";

export type PracticeCreateInput = Omit<Practice, SystemInfo | "id">; // FIXME: refactor createdAt and updatedAt to | SystemInfo
export type PracticeUpdateInput = Omit<Practice, SystemInfo>; // FIXME: refactor createdAt and updatedAt to | SystemInfo
export type PracticeAdvantageUpsert = Omit<PracticeAdvantage, SystemInfo | "id" | "practiceId">;
export type PracticeParams = {
    practiceId: string | number;
};