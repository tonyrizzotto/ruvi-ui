const axios = require('axios');
const manifest = require('../manifest');

const {
  accountServices: {
    baseUrl,
    timeout
  }
} = manifest;

// module.exports = { accountServicesApi }
module.exports.createClient = async () => {
    client = axios.create({
      baseURL: baseUrl,
      timeout: timeout,
    });

  return {
    delete: async (url) => {
      return client.delete(url)
    },
    get: async (url) => {
      return client.get(url)
    },
    patch: async (url) => {
      return client.patch(url)
    },
    post: async (url, body) => {
      return client.post(url, body)
    },
    put: async (url) => {
      return client.put(url)
    }
  }
}