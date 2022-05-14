import React from 'react'
import ReactDOM from 'react-dom'
import { 
  BrowserRouter,
} from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

import App from './App'

const client = new ApolloClient({
  uri: '/',
  cache: new InMemoryCache()
});


ReactDOM.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </BrowserRouter>
  , document.getElementById('root'))