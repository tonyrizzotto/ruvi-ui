const { createClient } = require('../../clients/accountservices-api');

const accountLogin = async (parent, args, context, info) => {
  const accountServicesApi = await createClient();

  const {
    email,
    password
  } = args;

  const response = await accountServicesApi.post('/accountservices/v1/accounts/login', {
      email,
      password
    })
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err)
  })

  return response;
}

module.exports = accountLogin;