const axios = require('axios');
const manifest = require('../manifest');
const { createClient } = require('./createClient')

const {
  accountServices: {
    baseUrl,
    timeout
  }
} = manifest;

// const accountServicesApi = async (baseUrl, timeout) => {
//   const client = axios.create({
//     baseURL: baseUrl,
//     timeout: timeout
//   });

//   return {
//     delete: async (url) => {
//       return client.delete(url)
//     },
//     get: async (url) => {
//       return client.get(url)
//     },
//     patch: async (url) => {
//       return client.patch(url)
//     },
//     post: async (url) => {
//       return client.post(url)
//     },
//     put: async (url) => {
//       return client.put(url)
//     }
//   }
// }

// module.exports = { accountServicesApi }
module.exports.createClient = async () => {
    client = axios.create({
      baseURL: baseUrl,
      timeout: timeout
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
    post: async (url) => {
      return client.post(url)
    },
    put: async (url) => {
      return client.put(url)
    }
  }
}