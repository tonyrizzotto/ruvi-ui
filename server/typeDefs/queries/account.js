const { gql } = require('apollo-server')

module.exports = gql`
  type Account {
    first_name: String!
    last_name: String!
    email: String!
    username: String!
    password: String!
  }
`