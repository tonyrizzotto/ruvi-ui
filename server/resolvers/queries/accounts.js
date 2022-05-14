const { createClient } = require('../../clients/accountservices-api');
// const { accountServicesApi } = require('../../clients/accountservices-api');

const accounts = async () => {
  const accountServicesApi = await createClient();

  const response = await accountServicesApi.get('/accountservices/v1/accounts')
    .then(({ data }) => data)
    .catch((err) => {
      throw new Error(err)
    })

  return response;
};

module.exports = accounts;

