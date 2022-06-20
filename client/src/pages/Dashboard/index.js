import React from 'react';
import AuthConsumer from '../../authentication/useAuth';
import validateAuth from '../../authentication/hooks/validateAuth';

export default function Dashboard() {
  const { isAuthenticated, user } = AuthConsumer();

  // Validate Authentication
  validateAuth();

  return (
    <div>
      {isAuthenticated ?
        <div>
          <h3>Hello, {user.first_name}</h3>
        </div>
        : 'Unauthorized'
      }
    </div> 
  )
}