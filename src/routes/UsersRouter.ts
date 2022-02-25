import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import { addController } from '../controllers/UserController';
import { addProduct } from '../controllers/ProductController';
import JwtValidate from '../controllers/middlewares/JwtValidate';

export const User = Router();
export const Login = Router();
export const Products = Router();

// Create user
User.post('/', addController);

// Login
Login.post('/', LoginController);

// Create product
Products.post('/', JwtValidate, addProduct);