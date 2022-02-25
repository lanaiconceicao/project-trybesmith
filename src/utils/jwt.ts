import jwt from 'jsonwebtoken';
import JwtInterface from '../interfaces/JwtInterfaces';

export const JWT_SECRET = 'SegredoTrybe2022';

export const signToken = (payload: JwtInterface) => jwt.sign(payload, JWT_SECRET, {
  algorithm: 'HS256',
  expiresIn: '1h',
});

export const verifyToken = (token: string) => {
  jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });
};

export default {
  signToken,
  verifyToken,
};
