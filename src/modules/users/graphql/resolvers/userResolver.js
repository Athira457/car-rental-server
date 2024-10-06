import  UserRepository from '../../repository/userRepository.js';

const resolvers = {
  Query: {
    users: async () => {
      // Fetch all users from the repository
      return await UserRepository.getAllUsers(); 
    },
  },
  Mutation: {
    createUser: async (_, { name, email, password }) => {
      // Create a new user via the repository
      return await UserRepository.createUser(name, email, password); 
    },
  }, 
};

export default resolvers;
