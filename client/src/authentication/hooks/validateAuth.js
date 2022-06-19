import { useEffect } from 'react';
import jwt_decode from 'jwt-decode'
import AuthConsumer from '../useAuth';

///////////////////////////////
// Helper Functions for Auth //
///////////////////////////////


/**
 * 
 * @returns a JWT access token, if stored locally
 */
export function getAuthTokenFromLocalStorage() {
  return localStorage.getItem('access-token')
}

/**
 * 
 * @returns Boolean based on if the stored token is valid
 */
export function isAuthTokenValid() {
  // get the time in unix
  const currentTime = Math.floor(Date.now(), 1000)

  // get the current token
  const token = getAuthTokenFromLocalStorage();

  // if no token return false
  if (!token) {
    return { authorized: false, token }
  }

  // get expiration if token exists
  const { exp } = jwt_decode(token)

  // if the current time is less than the expiration time, the token is valid
  if (currentTime < (exp * 1000)) {
    return { authorized: true, token}
  }

  return { authorized: false, token };
  
}

/**
 * @description validates authentication on page refresh.
 */
export default function validateAuth() {

  const { login } = AuthConsumer();

  // check authentication
  const { authorized, token } = isAuthTokenValid();

  return useEffect(() => {
    login(authorized, token)
  }, [])
}

