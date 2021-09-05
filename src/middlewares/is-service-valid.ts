import { NextFunction, Request, Response } from 'express';
import { respondUnauthenticated } from '../responses';
import { configs } from '../settings';


export function isServiceValid(allowUnauthenticated = false) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const [method, content] = (req.headers.authorization || '').split(' ');
      if (method.toLowerCase() !== 'service') throw Error('InvalidServiceAuthHeader');
      if (content.toLowerCase() !== configs.microservices.pse.serviceId) throw Error('InvalidServiceId');

      return next();
    }
    catch (e) {
      if (allowUnauthenticated) return next();
      return respondUnauthenticated(res);
    }
  };
}
