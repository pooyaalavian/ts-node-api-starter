import { NextFunction, Request, Response } from 'express';

export async function isAdmin(req: Request, res: Response, next: NextFunction) {
  // check token
  // or check db
}
