import { Practice, PracticeAdvantage } from "@prisma/client";

export type PracticeCreateInput = Omit<Practice, "id" | "createdAt" | "updatedAt">; // FIXME: refactor createdAt and updatedAt to | SystemInfo
export type PracticeUpdateInput = Omit<Practice, "createdAt" | "updatedAt">; // FIXME: refactor createdAt and updatedAt to | SystemInfo
export type PracticeUpsert = Omit<PracticeAdvantage, "id" | "practiceId">;
export type PracticeParams = {
    practiceId: string | number;
};