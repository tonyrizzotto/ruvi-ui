import React, { createContext, useContext, useState } from 'react';
import jwt_decode from 'jwt-decode';

const AuthContext = createContext();

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return {
    isAuthenticated,
    user,
    // The login function should only recieve a token.
    login(authorized, token) {
      return new Promise((resolve) => {
        setIsAuthenticated(authorized);
        //  store token in local storage.
        localStorage.setItem('access-token', token);

        const { user } = jwt_decode(token);
        localStorage.setItem('user', JSON.stringify(user));

        setUser(user)

        resolve();
      })
    },
    logout() {
      return new Promise((resolve) => {
        setIsAuthenticated(false);

        localStorage.removeItem('access-token');
        localStorage.removeItem('user');

        setUser({});
        resolve();
      })
    }
  }
}
// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const auth = useAuth();

  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export default function AuthConsumer() {
  return useContext(AuthContext)
}