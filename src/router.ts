import { Router } from 'express';
import { controllers } from './controllers/index';

export const router = Router();

for (const c of controllers) {
  router.use(c.basePath, c.router);
  console.log(`registered route ${c.basePath}`);
}

