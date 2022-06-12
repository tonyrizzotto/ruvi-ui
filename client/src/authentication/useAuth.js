import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  return {
    isAuthenticated,
    user,
    login({ accountLogin }) {
      return new Promise((resolve) => {
        setIsAuthenticated(true);
        // instead of setting the user on state, we should store data in local storage.
        setUser(accountLogin)
        resolve();
      })
    },
    logout() {
      return new Promise((resolve) => {
        setIsAuthenticated(false);
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