import Joi from 'joi';

const ProductSchema = Joi.object({
  name: Joi.string().min(2).required(),
  amount: Joi.string().min(2).required(),
});

export default ProductSchema;