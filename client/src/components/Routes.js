/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router-dom';

// import { isAuthTokenValid } from '../authentication/hooks/validateAuth';

export default function AppRoute({ path, element: Component }) {
  // const { authorized } = isAuthTokenValid();
  // const navigate = useNavigate();

  return (
    <Route 
      key={path}
      path={path}
      element={<Component /> }
    />
  )
}