// const { createClient } = require('./clients/accountservices-api');

// const server = createClient()

// console.log(server.get('/v2'));

function sum(a, b) {
  return a + b;
}

const server = jest.fn();
