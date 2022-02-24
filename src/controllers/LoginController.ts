import rescue from 'express-rescue';
import { Request, Response } from 'express';
import validateSchema from './joi/validateSchema';
import LoginSchema from './joi/LoginSchema';
import LoginService from '../services/LoginService';

const LoginController = rescue(async (req: Request, res: Response) => {
  validateSchema(LoginSchema, req.body);
  
  const token = await LoginService(req.body);

  res.status(201).json({ token }); 
});

export default LoginController;
