import { NextFunction, Request, Response } from 'express';
import { respondUnauthenticated } from '../responses';


export function isAuthenticated(allowUnauthenticated = false) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      return next();
    }
    catch (e) {
      if (allowUnauthenticated) return next();
      return respondUnauthenticated(res);
    }
  };
}
