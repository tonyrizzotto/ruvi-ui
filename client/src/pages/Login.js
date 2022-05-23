import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthConsumer from '../authentication/useAuth';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login } = AuthConsumer()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    login(email).then(() => {
      navigate('/dashboard')
    })
  }
  
  return (
    <>
      <form onSubmit={handleSubmit}>
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