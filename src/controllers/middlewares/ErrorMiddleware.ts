import { Request, Response, NextFunction } from 'express';
import ErrorInterface from '../../interfaces/ErrorInterface';

const ErrorMiddleware = (err: ErrorInterface, req: Request, res: Response, _next: NextFunction) => {
  console.log(err, 'oioioioioioioi');
  
  res.status(500).json({
    message: 'error processing request',
  });
};

export default ErrorMiddleware;