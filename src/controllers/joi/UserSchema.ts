import Joi from 'joi';

const UserSchema = Joi.object({
  username: Joi.string().min(2).required(),
  classe: Joi.string().min(2).required(),
  level: Joi.number().min(1).required(),
  password: Joi.string().min(7).required(),
});

export default UserSchema;