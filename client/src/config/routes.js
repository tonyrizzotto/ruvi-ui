// return an array of objects that describe routes

import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

export const routes = [
  {
    path: '/login',
    Component: Login,
    isPrivate: false
  },
  {
    path: '/dashboard',
    Component: Dashboard,
    isPrivate: true
  }
]