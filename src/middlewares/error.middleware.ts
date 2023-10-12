import { NextFunction, Request, Response } from 'express';
import httpStatus from 'http-status';
import { AppErrors } from '@/protocols/customError.protocols';

export default function errorHandler(error: AppErrors, _req: Request, res: Response, _next: NextFunction) {
  console.log(error);
  if (error.code === 'P2002')
    return res.status(httpStatus.CONFLICT).send(`${error?.meta?.target} is already registered`);

  if (error.code === 'P2003') return res.status(httpStatus.NOT_FOUND).send(``);

  if (error.code === 'P2025') return res.status(httpStatus.NOT_FOUND).send(`${error?.meta?.cause} `);

  if (error.name === 'unprocessableEntity') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  if (error.name === 'conflict') {
    return res.status(httpStatus.CONFLICT).send(error.message);
  }
  if (error.name === 'unauthorized') {
    return res.status(httpStatus.UNAUTHORIZED).send(error.message);
  }
  if (error.name === 'badRequest') {
    return res.status(httpStatus.BAD_REQUEST).send(error.message);
  }
  if (error.name === 'notFound') {
    return res.status(httpStatus.NOT_FOUND).send(error.message);
  }

  if (error.name === 'incompleteData') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }

  if (error.name === 'invalidId') {
    return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
  }
  if (error.name === 'internal') {
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send(error.message);
  }
  res.status(httpStatus.INTERNAL_SERVER_ERROR).send(`Sorry, something went ${error}`);
}
