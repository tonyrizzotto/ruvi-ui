const { gql } = require('apollo-server');
const mutations = require('./mutations');
const queries = require('./queries')

const customDefs = gql`
  scalar UUID

  type Query {
    about: String!
  }

  type Mutation {
    about: String!
  }
`
module.exports = [
  customDefs,
  ...mutations,
  ...queries
]