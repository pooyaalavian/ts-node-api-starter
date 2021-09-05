import { Response } from 'express';

function respondTemplate(res: Response, errorCd: number, text: string, payload?: any) {
  if (!payload) {
    return res.status(errorCd).json({ error: text });
  }
  if (payload instanceof Error) {
    const msg = payload.message;
    return res.status(errorCd).json({ error: text + ' ' + msg, errorStack: payload.stack, errorName: payload.name });
  }
  return res.status(errorCd).json({ error: text, payload });
}

export function respondUnauthenticated(res: Response, payload?: any) {
  return respondTemplate(res, 401, 'Unauthenticated.', payload);
}

export function respondUnauthorized(res: Response, payload?: any) {
  return respondTemplate(res, 401, 'Unauthorized.', payload);
}

export function respondNotFound(res: Response, payload?: any) {
  return respondTemplate(res, 404, 'Not found.', payload);
}

export function respondGenericError(res: Response, payload?: any) {
  return respondTemplate(res, 500, 'Server encountered an error.', payload);
}
