const createServer = require('./server');

describe('Server', () => {
  let server = null;

  beforeAll(async () => {
    server = await createServer();
  });

  afterAll(() => {
    server = null;
  })

  test('runs without exception', async () => {
    await expect(createServer()).resolves.not.toThrow();
  })

  test('is defined', async () => {
    expect(server).toBeDefined();
  })
  
})