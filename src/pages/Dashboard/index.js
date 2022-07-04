import React from 'react';
import AuthConsumer from '../../authentication/useAuth';
import useValidateAuth from '../../authentication/hooks/validateAuth';

export default function Dashboard() {
  const { isAuthenticated, user } = AuthConsumer();

  // Validate Authentication
  useValidateAuth();

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