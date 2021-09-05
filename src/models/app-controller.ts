import { Router } from 'express';

export interface AppController {
  router: Router,
  basePath: string,
}
