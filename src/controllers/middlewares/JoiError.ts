import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import ErrorInterface from '../../interfaces/ErrorInterface';

const JoiError = (err: ErrorInterface, req: Request, res: Response, next: NextFunction) => {
  // função JoiError criada a partir do repositório de aulas da turma 14 tribo C
  // https://github.dev/tryber/sd-014-c-live-lectures/tree/lecture/23.3
  
  // Documentação Joi: isError https://joi.dev/api/?v=17.6.0#iserrorerr
  if (!Joi.isError(err)) {
    return next(err);
  }

  res.status(422).json({ code: 'unprocessable_entity', message: err.message });
};

export default JoiError;
