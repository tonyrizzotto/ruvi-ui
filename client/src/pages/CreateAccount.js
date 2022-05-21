import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { CREATE_ACCOUNT } from "../constants/queries";

export default function CreateAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isUpdatingEmail, setIsUpdatingEmail] = useState(false);
  const [isUpdatedingUsername, setIsUpdatingUsername] = useState(false)
  const [emailErrorMessage, setEmailErrorMessage] = useState('')
  const [usernameErrorMessage, setUsernameErrorMessage] = useState('')

  const emailRef = useRef(null);
  const usernameRef = useRef(null);

  let navigate = useNavigate();

  window.addEventListener('keydown', () => {
    { isUpdatedingUsername && setIsUpdatingUsername(false) }
    { isUpdatingEmail && setIsUpdatingEmail(false)}
  })
  const [createAccount] = useMutation(CREATE_ACCOUNT, {
    onCompleted: (data) => {
      if (data.createAccount === '201') {
        // reset inputs
        setFirstName('');
        setLastName('');
        setEmail('');
        setUsername('');
        setPassword('');

        navigate('../../', { replace: true })
      }

      if (data.createAccount === 'ACCOUNT_EMAIL_KEY') {
        setIsUpdatingUsername(false);
        setIsUpdatingEmail(true)
        setEmailErrorMessage('Email already in use.')
      }
    
      if (data.createAccount === 'ACCOUNT_USERNAME_KEY') {
        setIsUpdatingEmail(false)
        setIsUpdatingUsername(true);
        setUsernameErrorMessage('Username is already taken.')
      }
    }
  });


  if (isUpdatingEmail) {
    emailRef.current.focus();
  }

  if (isUpdatedingUsername) {
    usernameRef.current.focus();
  }

  const handleCreateAccount = async (e) => {
    e.preventDefault();
    createAccount({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: encodeURIComponent(password)
      },
      fetchPolicy: 'no-cache'
    })
  };

  useEffect(() => {
  }, [isUpdatingEmail, isUpdatedingUsername])

  return (
    <>
      <form onSubmit={handleCreateAccount}>
        <label>First Name: </label>
        <input 
          type="text" 
          placeholder="first name" 
          value={firstName}
          onChange={(e) => {setFirstName(e.target.value)}}  
        />
        <br />
        <label>Last Name: </label>
        <input 
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <br />
        <span>
          <label>Email: </label>
          <input 
            type="text" 
            ref={emailRef}
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <i> {isUpdatingEmail && emailErrorMessage}</i>
        </span>
        <br />
        <span>
          <label>Username: </label>
          <input 
            ref={usernameRef}
            type="text"
            placeholder="username"
            autoComplete="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <i> {isUpdatedingUsername && usernameErrorMessage}</i>
        </span>

        <br />
        <label>Password: </label>
        <input 
          type="password" 
          placeholder="password"
          autoComplete="current-password" 
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}
        />
        <br />
        <button 
          type="submit"
          onSubmit={() => {
            setEmailErrorMessage('')
            setUsernameErrorMessage('')
            setIsUpdatingEmail(false)
            setIsUpdatingUsername(false)
          }}
        >
          Create an account
        </button>
      </form>
      <div>
        <p>Return <a href="/">back home</a></p>
      </div>
    </>
  )
}