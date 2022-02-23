import rescue from 'express-rescue';
import { Request, Response } from 'express';
import validateSchema from './joi/validateSchema';
import UserSchema from './joi/UserSchema';
import { addService } from '../services/UserService';

export const addController = rescue(async (req: Request, res: Response) => {
  validateSchema(UserSchema, req.body);
  const token = await addService(req.body);

  res.status(201).json({ token }); 
});

export default addController;