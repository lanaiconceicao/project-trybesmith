import rescue from 'express-rescue';
import { Request, Response } from 'express';
import validateSchema from './joi/validateSchema';
import { ProductSchema } from './joi/ProductSchema';
import { ProductService, getAllProducts } from '../services/ProductService';

export const addProduct = rescue(async (req: Request, res: Response) => {
  validateSchema(ProductSchema, req.body);
  const product = await ProductService(req.body);
  res.status(201).json({ item: product }); 
});

export const getAllProductsController = rescue(async (req: Request, res: Response) => {
  const products = await getAllProducts();
  res.status(200).json(products); 
});
