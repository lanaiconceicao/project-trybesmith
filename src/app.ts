import express from 'express';
import dotenv from 'dotenv';
import JoiError from './controllers/middlewares/JoiError';
import DomainError from './controllers/middlewares/DomainError';
import ErrorMiddleware from './controllers/middlewares/Error';
import UserRouter from './routes/UsersRouter';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/users', UserRouter);

app.use(JoiError);
app.use(DomainError);
app.use(ErrorMiddleware);

export default app;
