import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import ErrorInterface from '../../interfaces/ErrorInterface';

const JoiError = (err: ErrorInterface, req: Request, res: Response, next: NextFunction) => {
  if (!Joi.isError(err)) {
    return next(err);
  }

  enum ErrorCode {
    badRequest = 400,
    unprocessableEntity = 422,
    unauthorized = 401,
  }

  let status;

  if (err.details[0].type.includes('required')) {
    status = ErrorCode.badRequest;
  } else {
    status = ErrorCode.unprocessableEntity;
  }

  res.status(status).json({ error: err.message });
};

export default JoiError;
