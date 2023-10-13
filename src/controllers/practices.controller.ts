import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { practiceServices } from '@/services/practices.service';
import { PracticeCreateInput, PracticeParams, PracticeAdvantageUpsert, UserCredentials } from '@/protocols';

export async function createPractices(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const { name } = req.body as PracticeCreateInput;
  const result = await practiceServices.createPractice(name, user);
  return res.status(httpStatus.OK).send(result);
}

export async function getPractices(_req: Request, res: Response) {
  const result = await practiceServices.getPractice();
  return res.status(httpStatus.OK).send(result);
}

export async function updatePractice(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const { practiceId } = req.params as PracticeParams;
  const { name } = req.body as PracticeCreateInput;
  const result = await practiceServices.updatePractice(Number(practiceId), name, user);
  return res.status(httpStatus.OK).send(result);
}

export async function upsertPracticeAdvantage(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const { practiceId } = req.params as PracticeParams;
  const { advantage, description } = req.body as PracticeAdvantageUpsert;
  const result = await practiceServices.upsertPracticeAdvantage(advantage, description, Number(practiceId), user);
  return res.status(httpStatus.OK).send(result);
}

export async function deletePractice(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const { practiceId } = req.params as PracticeParams;
  const result = await practiceServices.deletePractice(Number(practiceId), user);
  return res.status(httpStatus.OK).send(result);
}
