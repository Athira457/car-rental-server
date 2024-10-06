import { gql } from 'apollo-server-micro';

const userQuery = gql`
  type Query {
    users: [User]!
  }
`;

export default userQuery;
