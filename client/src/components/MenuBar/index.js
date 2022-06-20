import React, { useState } from 'react';
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

import Apps from '@mui/icons-material/Apps';
import ContactMail from '@mui/icons-material/ContactMail';
import Home from '@mui/icons-material/Home';
import Menu from '@mui/icons-material/Menu';

export default function MenuBar() {
  const [open, setOpen] = useState(false);

  // Top List
  const topListItems = [
    {
      icon: <Home />,
      text: 'Home'
    },
    {
      icon: <Apps />,
      text: 'Portfolio'
    },
    {
      icon: <ContactMail />,
      text: 'Resume'
    }
  ];

  // Bottom List
  const bottomListItems = [
    {
      icon: <Apps />,
      text: 'Contact'
    },
    {
      icon: <ContactMail />,
      text: 'Get In Touch'
    }
  ]
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

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {topListItems.map((listItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {listItem.icon}
              </ListItemIcon>
              <ListItemText primary={listItem.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {bottomListItems.map((listItem, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton>
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
              anchor={'right'}
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