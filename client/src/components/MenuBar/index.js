import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthConsumer from '../../authentication/useAuth';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContactMail from '@mui/icons-material/ContactMail';
import Home from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import Menu from '@mui/icons-material/Menu';

export default function MenuBar() {
  const [open, setOpen] = useState(false);
  const { isAuthenticated, user, logout } = AuthConsumer();
  const navigate = useNavigate();

  // Top List
  const topListItems = [
    {
      icon: <Home />,
      text: 'Home',
      route: '/',
      showInAuth: true
    },
    {
      icon: <LoginIcon />,
      text: isAuthenticated ? 'Logout' : 'Login',
      route: isAuthenticated ? '/' : '/login'
    },
  ];
  
  // Auth Protected Routes - only show when logged in
  const authRoutes = [
    {
      icon: <Home />,
      text: 'Dashboard',
      route: '/dashboard'
    },
    {
      icon: <AccountCircleIcon />,
      text: 'Settings',
      route: `/dashboard/${user.account_uuid}`
    },
  ]

  // Bottom List
  const bottomListItems = [
    {
      icon: <AccountCircleIcon />,
      text: 'Create Account',
      route: '/accounts/create',
      showInAuth: false
    },
    {
      icon: <ContactMail />,
      text: 'Get In Touch',
      route: '/',
      showInAuth: true
    }
  ]

  // use to toggle the drawer open and closed
  const toggleDrawer = () =>
    (event) => {
      if (
        event.type === 'keydown' &&
        ((event).key === 'Tab' || (event).key === 'Shift')
      ) {
        return;
      }
      setOpen(!open)
    };

  // handle route access
  const handleAccess = ({ text, route }) => {
    if (text !== 'Logout') {
      navigate(route, { state: user })
    } else {
      logout().then(() => {
        navigate(route)
      })
    }
  }

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {topListItems.map((listItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton 
              onClick={() => handleAccess(listItem)}
            >
              <ListItemIcon>
                {listItem.icon}
              </ListItemIcon>
              <ListItemText primary={listItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* List protected menu items */}
      {isAuthenticated && (
        <List>
          {authRoutes.map((listItem, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => handleAccess(listItem)}
              >
                <ListItemIcon>
                  {listItem.icon}
                </ListItemIcon>
                <ListItemText primary={listItem.text} />
              </ListItemButton>
            </ListItem>
          ))}
          <Divider />
        </List>
      )}
      {/* Some bottom routes should not show in Auth Context */}
      <List>
        {bottomListItems.filter((item) => isAuthenticated ? item.showInAuth : item).map((listItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton 
              onClick={() => handleAccess(listItem)}
            >
              <ListItemIcon>
                {listItem.icon}
              </ListItemIcon>
              <ListItemText primary={listItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <Box component={'nav'}>
        <AppBar position='static'>
          <Toolbar>
            <IconButton onClick={toggleDrawer(true)}>
              <Menu />
            </IconButton>
            <Typography sx={{ paddingLeft: '18px' }}>RUVI.dev</Typography>
            <Drawer
              anchor={'left'}
              open={open}
              onClose={toggleDrawer(false)}
            >
              {list()}
            </Drawer>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}