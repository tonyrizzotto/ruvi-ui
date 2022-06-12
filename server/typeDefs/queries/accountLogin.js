const { gql } = require('apollo-server')

module.exports = gql`
  type Account {
    account_uuid: String!
    first_name: String!
    last_name: String!
    email: String!
    username: String!
    tfa_enabled: Boolean!
    deleted: Boolean!
  }

  extend type Query {
    accountLogin(email: String!, password: String!): Account!
  }
`