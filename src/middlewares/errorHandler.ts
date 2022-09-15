import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { errorCatalog } from './catalog';

const errorHandler: ErrorRequestHandler = (
  err: Error | ZodError,
  _req,
  res,
  _next,
) => {
  if (err instanceof ZodError) {
    res.status(400).json({
      message: err.issues });
  } 

  const messageAsErrorType = err.message as keyof typeof errorCatalog;
  const mappedError = errorCatalog[messageAsErrorType];
  if (mappedError) {
    const { message, httpStatus } = mappedError;
    return res.status(httpStatus).json({ message });
  }

  res.status(500).json({ message: 'Internal server error' });
};

export default errorHandler;