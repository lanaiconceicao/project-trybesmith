import { Router } from 'express';
import LoginController from '../controllers/LoginController';
import { addController } from '../controllers/UserController';

export const User = Router();
export const Login = Router();

// Create user
User.post('/', addController);

// Login
Login.post('/', LoginController);

export default User;