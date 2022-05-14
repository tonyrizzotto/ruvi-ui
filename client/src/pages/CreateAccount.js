import React from "react";

export default function CreateAccount() {
  // const [firstName, setFirstName] = useState('')
  return (
    <>
      <form>
        <label>First Name: </label>
        <input type="text" placeholder="first name" />
        <br />
        <label>Last Name: </label>
        <input type="text" placeholder="last name" />
        <br />
        <label>Username: </label>
        <input type="text" placeholder="username" />
        <br />
        <label>Password: </label>
        <input type="password" placeholder="password" />
        <br />
        <button type="submit">Create an account</button>
      </form>
      <div>
        <p>Return <a href="/">back home</a></p>
      </div>
    </>
  )
}