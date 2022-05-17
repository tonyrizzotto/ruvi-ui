import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_ACCOUNT } from "../constants/queries";

export default function CreateAccount() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [createAccount, { data }] = useMutation(CREATE_ACCOUNT);

  const handleCreateAccount = async (e) => {
    e.preventDefault();

    createAccount({
      variables: {
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: password
      }
    })

    const res = data.createAccount;

    if (res === '201') {
      // handle this case in the UI
      // reset inputs
      setFirstName('');
      setLastName('');
      setEmail('');
      setUsername('');
      setPassword('');

    } 

    if (res !== '201') {
      // handle this case in the UI
    }
  };

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
        <label>Email: </label>
        <input 
          type="text" 
          placeholder="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value)}}
        />
        <br />
        <label>Username: </label>
        <input 
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <br />
        <label>Password: </label>
        <input 
          type="password" 
          placeholder="password" 
          value={password}
          onChange={(e) => {setPassword(e.target.value)}}  
        />
        <br />
        <button type="submit">Create an account</button>
      </form>
      <div>
        <p>Return <a href="/">back home</a></p>
      </div>
    </>
  )
}