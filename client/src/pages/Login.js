import React, { useState } from 'react';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // send values to Login

    // Clear inputs
    setUsername('');
    setPassword('');
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Username: </label>
        <input 
          type="text"
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password: </label>
        <input 
          type="password"
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <div>
        <p>Don&#39;t have an account? <a href='/accounts/create'>Click here</a> to create one!</p>
      </div>
    </>
  )
}