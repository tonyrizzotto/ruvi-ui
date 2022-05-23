import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('')

  return {
    isAuthenticated,
    email,
    login(email) {
      return new Promise((resolve) => {

        setIsAuthenticated(true);
        setEmail(email)
        resolve();
      })
    },
    logout() {
      return new Promise((resolve) => {
        setIsAuthenticated(false);
        setEmail('');
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