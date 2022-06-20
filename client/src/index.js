import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  BrowserRouter,
} from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { AuthProvider } from './authentication/useAuth'
import App from './App'

const client = new ApolloClient({
  uri: 'http://localhost:4008',
  cache: new InMemoryCache()
});

// create a root with new React 18 API
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container)

root.render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ApolloProvider>
  </BrowserRouter>
)
