const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

async function createServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true
  })

  return server;
}

module.exports = createServer;