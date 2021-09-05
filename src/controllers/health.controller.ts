import { NextFunction, Request, Response, Router } from 'express';
import { AppController } from '../models/app-controller';
import { configs, pkgJson } from '../settings';


async function info(req: Request, res: Response, next: NextFunction) {
  res.status(200).json({
    app: configs.app.name,
    version: pkgJson.version,
    description: configs.app.desc,
  });
}
async function health(req: Request, res: Response, next: NextFunction) { }

const router = Router();
export const HealthController: AppController = {
  router,
  basePath: '/',
};

router.get('/health', health);
router.get('/', info);
