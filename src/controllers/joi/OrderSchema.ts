import Joi from 'joi';

const OrderSchema = Joi.array().items(Joi.number()).required();

export default OrderSchema;