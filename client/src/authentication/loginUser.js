export default async function (email, password) {
  const user = {
    email: 'tony@tonyrizzotto.com',
    password: '1234',
    username: 'adjustyourtone'
  }

  console.log(email, password);

  if (email === user.email && password === user.password) {
    return { username: user.username}
  }

  return { message: 'Unauthorized' }
}