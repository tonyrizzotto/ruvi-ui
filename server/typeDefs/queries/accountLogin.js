const { gql } = require('apollo-server')

module.exports = gql`
  # type Account {
  #   account_uuid: UUID!
  #   first_name: String!
  #   last_name: String!
  #   email: String!
  #   username: String!
  #   tfa_enabled: Boolean!
  #   deleted: Boolean!
  # }

  type Authorization {
    token: JWT!
  }

  extend type Query {
    accountLogin(email: String!, password: String!): Authorization!
  }
`