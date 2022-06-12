import React from 'react';
import { useNavigate } from 'react-router-dom';
import AuthConsumer from '../authentication/useAuth';

export default function Dashboard() {
  const { isAuthenticated, user, logout } = AuthConsumer();
  const navigate = useNavigate();

  console.log(user)
  return (
    <div>
      {isAuthenticated ?
        <div>
          <h3>My name is {user.first_name}</h3>
          <button onClick={() => {
            logout().then(() => navigate('/'))
          }}>Logout</button>
        </div>
        : 'Unauthorized'
      }
    </div> 
  )
}