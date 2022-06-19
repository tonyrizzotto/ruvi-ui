import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthConsumer from '../authentication/useAuth';
import validateAuth from '../authentication/hooks/validateAuth';

export default function Dashboard() {
  const { isAuthenticated, user, logout } = AuthConsumer();
  const navigate = useNavigate();

  // Validate Authentication
  validateAuth();
  return (
    <div>
      {isAuthenticated ?
        <div>
          <h3>Hello, {user.first_name}</h3>
          <button onClick={() => {
            logout().then(() => navigate('/'))
          }}>Logout</button>
        </div>
        : 'Unauthorized'
      }
    </div> 
  )
}