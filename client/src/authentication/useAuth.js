import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('')
  return {
    isAuthenticated,
    username,
    login(username) {
      return new Promise((resolve) => {
        setIsAuthenticated(true);
        setUsername(username)
        resolve();
      })
    },
    logout() {
      return new Promise((resolve) => {
        setIsAuthenticated(false);
        resolve();
      })
    }
  }
}
// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const auth = useAuth();

  console.log(auth)
  return (
    <AuthContext.Provider value={auth}>
      {children}
    </AuthContext.Provider>
  )
}

export default function AuthConsumer() {
  return useContext(AuthContext)
}