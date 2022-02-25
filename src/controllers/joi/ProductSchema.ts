import Joi from 'joi';

export const ProductSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.base': 'Name must be a string',
    'string.min': 'Name must be longer than 2 characters',
    'any.required': 'Name is required',
  }),
  amount: Joi.string().min(3).required().messages({
    'string.base': 'Amount must be a string',
    'string.min': 'Amount must be longer than 2 characters',
    'any.required': 'Amount is required',
  }),
});

export default ProductSchema;
