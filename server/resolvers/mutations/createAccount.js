const { createClient } = require('../../clients/accountservices-api');

const createAccount = async (parent, args, context, info) => {
  const accountServicesApi = await createClient();

  const {
      firstName,
      lastName,
      email,
      username,
      password
  } = args;
  
  const res = await accountServicesApi.post('/accountservices/v1/accounts/create', {
    firstName,
    lastName,
    email,
    username,
    password
  })
    .then((res) => res.status)
    .catch(({ response: { data } }) => data.message)

  return res;
};

module.exports = createAccount;