import { ProductInterface } from '../interfaces/ProductInterface';
import * as ProductModel from '../models/ProductModel';

export const ProductService = async (product: ProductInterface) => {
  const addProduct = await ProductModel.add(product);
  return addProduct;
};

export const getAllProducts = async () => {
  const products = await ProductModel.getAllProducts();
  return products;
};
