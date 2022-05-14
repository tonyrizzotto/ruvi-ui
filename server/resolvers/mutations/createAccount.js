const { createClient } = require('../../clients/accountservices-api');

const createAccount = async (payload) => {
  const accountServicesApi = await createClient();

  const response = await accountServicesApi.post('/accountservices/v1/accounts/create', payload)
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err)
    })

  return response;
};

module.exports = createAccount;