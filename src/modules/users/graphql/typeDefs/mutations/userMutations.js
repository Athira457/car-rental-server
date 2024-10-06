// userMutations.js
import { gql } from 'apollo-server-micro';

const userMutation = gql`
  type Mutation {
    createUser(name: String!, email: String!, password: String!): User!
  }
`;

export default userMutation;
