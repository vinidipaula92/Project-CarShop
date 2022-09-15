import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ZodError } from 'zod';
import { errorCatalog } from './catalog';

const errorHandler: ErrorRequestHandler = (
  err: Error | ZodError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ZodError) {
    return res.status(400).json({
      error: err.issues });
  } 

  const messageAsErrorType = err.message as keyof typeof errorCatalog;
  const mappedError = errorCatalog[messageAsErrorType];
  if (mappedError) {
    const { message, httpStatus } = mappedError;
    return res.status(httpStatus).json({ error: message });
  }

  res.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;