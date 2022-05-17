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
    .catch(({ response }) => {
      if (response.status === 400) {
        // return the message to the front end to handle the error in the UI
        return response.data.message
      }
    })

  return res;
};

module.exports = createAccount;