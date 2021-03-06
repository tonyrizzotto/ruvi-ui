const createServer = require('./server.js');

let server;
const start = async () => {
  server = await createServer();

  server.listen({ port: 4008 }).then(({ url }) => {
    console.log(`Server is listening at ${url}`)
  });
}

start();