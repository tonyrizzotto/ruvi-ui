import React from 'react';
import CreateAccount from '../pages/CreateAccount';
import AccountDetails from '../pages/Dashboard/accountDetails';
import Dashboard from "../pages/Dashboard/index.js";
import Login from "../pages/Login";
// import validateAuth from '../authentication/hooks/validateAuth';

export const routes = [
  {
    path: '/',
    element: <div>Home Page</div>,
    isPrivate: false
  },
  {
    path: '/login',
    element: <Login />,
    isPrivate: false
  },
  {
    path: '/accounts/create',
    element: <CreateAccount />,
    isPrivate: false
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/dashboard/:uuid',
    element: <AccountDetails />
  }
]
