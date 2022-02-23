import { Router } from 'express';
import { addController } from '../controllers/UserController';

const User = Router();

// Create user
User.post('/', addController);

export default User;