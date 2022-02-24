import express from 'express';
import dotenv from 'dotenv';
import JoiError from './controllers/middlewares/JoiError';
import DomainError from './controllers/middlewares/DomainError';
import ErrorMiddleware from './controllers/middlewares/ErrorMiddleware';
import { User, Login } from './routes/UsersRouter';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/users', User);
app.use('/login', Login);

app.use(JoiError);
app.use(ErrorMiddleware);
app.use(DomainError);

export default app;
