import Joi from 'joi';

const userValidationSchema = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(5).required(),
});

const validateCreateUser = (userData) => {
  return userValidationSchema.validate(userData);
};

export { validateCreateUser };
