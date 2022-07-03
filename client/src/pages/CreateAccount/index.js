import React, { useEffect, useState, useRef } from "react";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { useNavigate } from 'react-router-dom';
import { useMutation } from "@apollo/client";
import { CREATE_ACCOUNT } from "../../constants/queries";

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

        navigate('../login', { replace: true })
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
      <Box
        component={'form'}
        autoComplete='off'
        onSubmit={handleCreateAccount}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 1,
          margin: '20px auto',
          borderRadius: 3,
          maxWidth: '550px'
        }}
      >
        <TextField 
          type={'text'}
          label='First Name'
          autocomplete='current-first-name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          sx={{ m: 1 }}
        />
        <br />
        <TextField 
          type={'text'}
          label='Last Name'
          autocomplete='current-last-name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          sx={{ m: 1 }}
        />
        <br />
        <TextField 
          type={'text'}
          label='Email'
          autocomplete='current-email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ m: 1 }}
        />
        <i> {isUpdatingEmail && emailErrorMessage}</i>

        <br />
        <TextField 
          type={'text'}
          label='Username'
          autocomplete='current-username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          sx={{ m: 1 }}
        />
        <i> {isUpdatedingUsername && usernameErrorMessage}</i>

        <br />
        <TextField 
          type={'password'}
          label='Password'
          autocomplete='current-password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          sx={{ m: 1 }}
        />
        <Button
          type='submit'
          variant='contained'
          color='primary'
          sx={(theme) => ({ m: 1, p: 2, backgroundColor: theme.palette.secondary.main  })}
        >
          Submit
        </Button>
        <div>
          <p>Return <a href="/">back home</a></p>
        </div>
      </Box>
    </>
  )
}