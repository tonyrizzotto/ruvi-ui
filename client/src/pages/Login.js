import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLazyQuery } from '@apollo/client';
import AuthConsumer from '../authentication/useAuth';
import { ACCOUNT_LOGIN } from '../constants/queries';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = AuthConsumer();

  const navigate = useNavigate();

  const [accountLogin, { loading }] = useLazyQuery(ACCOUNT_LOGIN, {
    onCompleted: (data) => {
      const { accountLogin: { authorized, token} } = data;

      return login(authorized, token)
        .then(() => {
          navigate('/dashboard')
        })
    }
  })

  const handleLogin = async (e) => {
    e.preventDefault();

    accountLogin({
      variables: {
        email,
        password: encodeURIComponent(password)
      },
      fetchPolicy: 'no-cache'
    })
  }
  return (
    <Box
      component={'form'}
      autoComplete="off"
      onSubmit={handleLogin}
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
      { !loading ? 
        <>
          <TextField 
            type="email"
            label='email'
            required
            autoComplete='current-email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ m: 1 }}
          />
          <br />
          <TextField 
            type="password"
            label='password'
            required
            autoComplete='current-password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            sx={{ m: 1 }}
          />
          <br />
          <Button
            type="submit"
            variant='contained'
            color='primary'
            sx={(theme) => ({ m: 1, p: 2, backgroundColor: theme.palette.secondary.main  })}
          >Submit</Button>
          <div>
            <p>Don&#39;t have an account? <a href='/accounts/create'>Click here</a> to create one!</p>
          </div>
        </>
        : 
        <div>
          <p>redirecting...</p>
        </div>  
      }
    </Box>
  )
}