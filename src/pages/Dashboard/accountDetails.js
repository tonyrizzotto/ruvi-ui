import React from 'react';
import { useLocation } from 'react-router-dom'
import AuthConsumer from '../../authentication/useAuth';
import useValidateAuth from '../../authentication/hooks/validateAuth';

export default function AccountDetails() {
  const { isAuthenticated } = AuthConsumer();
  let { state } = useLocation();
  
  //validate Auth
  useValidateAuth();

  return (
    <>
      { isAuthenticated ? `Hello ${state.username}` : 'Unauthorized'}
    </>
  )
}