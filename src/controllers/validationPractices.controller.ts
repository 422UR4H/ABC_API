import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { validationPracticesService } from '@/services';
import { PracticeParams, UserCredentials } from '@/protocols';

export async function validatedPractice(req: Request, res: Response) {
  const user = res.locals.user as UserCredentials;
  const { practiceId } = req.params as PracticeParams;

  await validationPracticesService.addToValidatePractices(user, Number(practiceId));
  //   Mock of validation of practices for the user
  const result = validationPracticesService.addValidatedPractices(user, Number(practiceId));
  return res.status(httpStatus.CREATED).send(result);
}
