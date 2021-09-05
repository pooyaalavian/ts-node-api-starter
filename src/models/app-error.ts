import { Response } from 'express';

export class HttpError extends Error {
  error: Error;
  httpCode: number;
  msg: string;
  context: any;
  constructor(httpCode: number, msg: string, context: any) {
    super();
    this.error = this as Error;
    this.httpCode = httpCode;
    this.msg = msg;
    this.context = context;
  }
  respond(res: Response) {

  }
}