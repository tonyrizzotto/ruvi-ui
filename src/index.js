import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  BrowserRouter,
} from "react-router-dom"
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import { AuthProvider } from './authentication/useAuth'
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import CssBaseline from '@mui/material/CssBaseline'
import App from './App'
import MenuBar from './components/MenuBar';
import { theme } from './config/theme';

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
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <MenuBar />
          <App />
        </ThemeProvider>
      </AuthProvider>
    </ApolloProvider>
  </BrowserRouter>
)
