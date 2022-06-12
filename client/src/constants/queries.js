import { gql } from "@apollo/client"

export const CREATE_ACCOUNT = gql`
  mutation CreateRuviAccount($firstName: String!, $lastName: String!, $email: String!, $username: String!, $password: String!) {
    createAccount(firstName: $firstName, lastName: $lastName, email: $email, username: $username, password: $password)
  }
`

export const ACCOUNT_LOGIN = gql`
  query RuviLogin($email: String!, $password: String!) {
    accountLogin(email: $email, password: $password) {
      token
    }
  }
`