const axios = require('axios');

/**
 * 
 * @param {String} baseUrl a url directed towards a microservice
 * @param {Number} timeout a default timeout
 * @returns a series of HTTP Methods: DELETE, GET, PATCH, POST, PUT
 */
module.exports.createClient = async (baseUrl, timeout) => {
  if (!client) {
    client = axios.create({
      baseUrl,
      timeout
    })
  }

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
