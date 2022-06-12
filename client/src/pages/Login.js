import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import AuthConsumer from '../authentication/useAuth';
import { ACCOUNT_LOGIN } from '../constants/queries';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = AuthConsumer();
  const navigate = useNavigate();

  const [accountLogin] = useLazyQuery(ACCOUNT_LOGIN, {
    onCompleted: (data) => {
      login(data).then(() => {
        navigate('/dashboard')
      })
    }
  })

  const handleLogin = async (e) => {
    e.preventDefault();

    await accountLogin({
      variables: {
        email,
        password: encodeURIComponent(password)
      }
    })

    // login(email).then(() => {
    //   navigate('/dashboard')
    // })
  }
  
  return (
    <>
      <form onSubmit={handleLogin}>
        <label>Email: </label>
        <input 
          type="text"
          placeholder='email'
          autoComplete='current-email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password: </label>
        <input 
          type="password"
          placeholder='password'
          autoComplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button 
          type="submit"
        >Submit</button>
      </form>
      <div>
        <p>Don&#39;t have an account? <a href='/accounts/create'>Click here</a> to create one!</p>
      </div>
    </>
  )
}