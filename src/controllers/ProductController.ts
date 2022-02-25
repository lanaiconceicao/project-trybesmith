import rescue from 'express-rescue';
import { Request, Response } from 'express';
import validateSchema from './joi/validateSchema';
import { ProductSchema } from './joi/ProductSchema';
import { addService } from '../services/UserService';

export const addProduct = rescue(async (req: Request, res: Response) => {
  validateSchema(ProductSchema, req.body);
  const product = await addService(req.body);

  res.status(201).json({ product }); 
});

// retirar:
export const teste = 0;