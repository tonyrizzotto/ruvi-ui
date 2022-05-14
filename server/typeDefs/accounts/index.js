const { gql } = require('apollo-server');

module.exports = gql`
  type Accounts {
    hello: String!
  }

  type Query {
    accounts: Accounts
  }
`;
