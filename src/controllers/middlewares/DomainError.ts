import { Request, Response, NextFunction } from 'express';
import ErrorInterface from '../../interfaces/ErrorInterface';

// Função desenvolvida a partir do repositório de aulas da turma 14 tribo C
// https://github.dev/tryber/sd-014-c-live-lectures/tree/lecture/23.3

const DomainError = (err: ErrorInterface, req: Request, res: Response, next: NextFunction) => {
  if (err.code !== 'notFound') {
    return next(err);
  }

  return res.status(404).json(err);
};

export default DomainError;