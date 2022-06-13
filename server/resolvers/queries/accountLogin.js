const { createClient } = require('../../clients/accountservices-api');
const jwt = require('jsonwebtoken');
const manifest = require('../../manifest');

const { auth: { signature }} = manifest;
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
    .then(({ headers }) => headers['x-user-auth'])
    .then((token) => {
      const validated = jwt.verify(token, signature, (err, decoded) => {
        return decoded;
      });

      let authorized;
      if (validated === undefined) {
        authorized = false;
        return { authorized, token: '' };
      }

      // if validated is populated, the signature has been verified
      authorized = true;

      return { authorized, token };
    })
    .catch((err) => {
      throw new Error(err)
  })

  return response;
}

module.exports = accountLogin;