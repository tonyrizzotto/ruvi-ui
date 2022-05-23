import React from 'react';
import AuthConsumer from '../authentication/useAuth';

export default function Dashboard() {

  const { isAuthenticated, username } = AuthConsumer();

  const handleClick = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <div>Hello I am { isAuthenticated ? `${username}` : 'not authenticated'}</div>
      <button onClick={handleClick}>Get it</button>
    </>
    
  )
}