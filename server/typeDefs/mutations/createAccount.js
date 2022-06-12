const { gql } = require('apollo-server');

module.exports = gql`
  type createAccount {
    firstName: String!
    lastName: String!
    email: String!
    username: String!
    password: String!
  }

  extend type Mutation {
    createAccount (
        firstName: String!
        lastName: String!
        email: String!
        username: String!
        password: String!
      ): String
  }
`