import { Request, Response, NextFunction } from 'express';
import ErrorInterface from '../../interfaces/ErrorInterface';

const Error = (err: ErrorInterface, req: Request, res: Response, _next: NextFunction) => {
  res.status(500).json({
    code: 'internal_server_error',
    message: 'error processing request',
  });
};

export default Error;