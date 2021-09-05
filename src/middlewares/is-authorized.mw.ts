import { Request, Response, NextFunction } from 'express';
import { respondUnauthorized, respondNotFound } from '../responses';
type AccessLevel = 'view' | 'edit' | 'own';

export const isAuthorized = (accessLevel: AccessLevel, systemType: 'pma' | 'pse', paramAddress: string[]) => async function(req: Request, res: Response, next: NextFunction) {
  try {
    // implement logic here
    const hasAccess = true;

    if (hasAccess) return next();
    return respondUnauthorized(res);
  }
  catch (e) {
    return respondNotFound(res);
  }
};
