const { gql } = require('apollo-server');

module.exports = gql`
  type createAccount {
    first_name: String
    last_name: String
    email: String
    username: String
    password: String
  }

  input CreateAccountInput {
    first_name: String
    last_name: String
    email: String
    username: String
    password: String
  }

  type Mutation {
    createAccount(
      input: CreateAccountInput
    ): createAccount
  }
`