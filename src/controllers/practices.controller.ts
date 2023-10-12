import { Request, Response } from "express";
import httpStatus from "http-status";
import { practiceServices } from "@/services/practices.service";
import {
    PracticeCreateInput,
    PracticeAdvantageUpsert,
} from "@/protocols/practices.protocols";
import { PracticeParams } from "@/protocols/practices.protocols";


export async function createPractices(req: Request, res: Response) {
    const { name } = req.body as PracticeCreateInput;
    const result = await practiceServices.createPractice(name);
    return res.status(httpStatus.OK).send(result);
}

export async function getPractices(_req: Request, res: Response) {
    const result = await practiceServices.getPractice();
    return res.status(httpStatus.OK).send(result);
}

export async function updatePractice(req: Request, res: Response) {
    const { practiceId } = req.params as PracticeParams;
    const { name } = req.body as PracticeCreateInput;
    const result = await practiceServices.updatePractice(
        Number(practiceId),
        name
    );
    return res.status(httpStatus.OK).send(result);
}

export async function upsertPracticeAdvantage(req: Request, res: Response) {
    const { practiceId } = req.params as PracticeParams;
    const { advantage, description } = req.body as PracticeAdvantageUpsert;
    const result = await practiceServices.upsertPracticeAdvantage(
        advantage,
        description,
        Number(practiceId)
    );
    return res.status(httpStatus.OK).send(result);
}

export async function deletePractice(req: Request, res: Response) {
    const { practiceId } = req.params as PracticeParams;
    const result = await practiceServices.deletePractice(Number(practiceId));
    return res.status(httpStatus.OK).send(result);
}