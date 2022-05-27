import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import MenuIcon from '@material-ui/core';
import Register from './Register';

const Header = () => {
    
  return (
<Box sx={{ flexGrow: 1 }}>
    <AppBar>
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            URL Shortner
          </Typography>
          {/* <Button color="inherit"> Register </Button> */}
           {/* <Router> <Button color="primary" component={Register} to="/register"> Register </Button></Router> */}
            
        </Toolbar>
    </AppBar>
    </Box>
  )
}

export default Header