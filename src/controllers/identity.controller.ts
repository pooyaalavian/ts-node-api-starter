import { NextFunction, Request, Response, Router } from 'express';
import { AppController } from '../models/app-controller';


async function login(req: Request, res: Response, next: NextFunction) { }

async function renewLogin(req: Request, res: Response, next: NextFunction) { }

async function logout(req: Request, res: Response, next: NextFunction) { }

async function register(req: Request, res: Response, next: NextFunction) { }

async function resetPasswordInit(req: Request, res: Response, next: NextFunction) { }

async function resetPasswordConfirm(req: Request, res: Response, next: NextFunction) { }

const router = Router();
export const IdentityController: AppController = {
  router,
  basePath: '/api/identity',
};
router.post('/register', register);
router.post('/login', login);
router.put('/renew', renewLogin);
router.delete('/logout', logout);
router.put('/reset/init', resetPasswordInit);
router.put('/reset/confirm', resetPasswordConfirm);
