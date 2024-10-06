import { UserRepository } from '../repository/userRepository.js';
import { validateCreateUser } from '../requests/userRequest.js';

const createUser = async (_, { name, email, password }) => {
  // Validate user input using Joi
  const { error } = validateCreateUser({ name, email, password });
  if (error) {
    throw new Error(`Validation error: ${error.details[0].message}`);
  }

  // Insert user into the database by calling the createUser method from UserRepository
  const user = await UserRepository.createUser(name, email, password);
  return user;
};

export default {
  createUser,
};