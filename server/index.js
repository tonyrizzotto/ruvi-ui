const { ApolloServer } = require('apollo-server');
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')


const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true
})

server.listen().then(({ url }) => {
  console.log(`Server is listening at ${url}`)
});

