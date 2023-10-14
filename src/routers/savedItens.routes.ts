import { Router } from 'express';
import { validateAuth, validateBody } from '@/middlewares/';
import { savedItensSchema } from '@/schemas';
import { addSavedItem, deleteSavedItens, getSavedItens } from '@/controllers';

const savedItensRouter = Router();

savedItensRouter
  .all('/*', validateAuth)
  .post('/', validateBody(savedItensSchema), addSavedItem)
  .get('/', getSavedItens)
  .delete('/', validateBody(savedItensSchema), deleteSavedItens);

export { savedItensRouter };
