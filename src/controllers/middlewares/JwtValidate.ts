import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../../utils/jwt';

const JwtValidate = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ error: 'Token not found' });
  // if (typeof authorization === 'undefined') return res.status(401).json({ error: 'Invalid token' });
  
  const token = req.headers.authorization as string;

  try {
    verifyToken(token);
    next();
  } catch (_e) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  // verifyToken(token);

  // next();
};

export default JwtValidate;
