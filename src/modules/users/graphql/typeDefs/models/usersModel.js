import { gql } from 'apollo-server-micro';

// Define the User type
const userType = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    password: String!
  }
`;

export default userType;
