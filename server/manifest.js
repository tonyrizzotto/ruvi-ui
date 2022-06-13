module.exports = {
  auth: {
    signature: '9ss{W2[$be!h}`Y.'
  },
  accountServices: {
    baseUrl: process.env.ACCOUNTSERVICES_BASEURL || 'http://0.0.0.0:8082',
    timeout: process.env.ACCOUNTSERVICES_TIMEOUT || 10000
  }
}