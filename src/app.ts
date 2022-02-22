import express from 'express';
import JoiError from './controllers/middlewares/JoiError';
import DomainError from './controllers/middlewares/DomainError';
import ErrorMiddleware from './controllers/middlewares/Error';

const app = express();

app.use(express.json());
app.use(JoiError);
app.use(DomainError);
app.use(ErrorMiddleware);

export default app;
