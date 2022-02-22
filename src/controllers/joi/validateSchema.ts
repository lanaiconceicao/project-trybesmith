import { Request } from 'express';
import { Schema } from 'joi';

// Feito com o auxílio do repositório de Sthefany Caroline
// Source: https://github.com/tryber/sd-014-c-project-blogs-api/pull/62

const validateSchema = (schema: Schema, body: Request<Body>) => {
  const { error } = schema.validate(body);
  if (error) throw error;
};

export default validateSchema;
