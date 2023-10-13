import httpStatus from 'http-status';
import { Request, Response } from 'express';
import { forumServices } from '@/services/forum.service';

export async function getForum(_req: Request, res: Response) {
    const { category, }
    const result = await forumServices.getForum();
    return res.status(httpStatus.OK).send(result);
}