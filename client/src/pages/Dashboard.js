import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthConsumer from '../authentication/useAuth';

export default function Dashboard() {
  const { isAuthenticated, email, logout } = AuthConsumer();
  const navigate = useNavigate();

  return (
    <div>
      {isAuthenticated ?
        <div>
          <h3>My email is {email}</h3>
          <button onClick={() => {
            logout().then(() => navigate('/'))
          }}>Logout</button>
        </div>
        : 'Unauthorized'
      }
    </div> 
  )
}