module.exports = {
  accountServices: {
    baseUrl: process.env.ACCOUNTSERVICES_BASEURL || 'http://0.0.0.0:8082',
    timeout: process.env.ACCOUNTSERVICES_TIMEOUT || 10000
  }
}