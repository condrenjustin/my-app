import React from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { AcUnit, AccessAlarm } from '@material-ui/icons';
import {
  Grid,
  Button,
  Drawer,
  MenuItem,
  IconButton,
  Typography,
  AppBar,
  Toolbar,
  Snackbar,
} from '@material-ui/core';
import styles from './header.module.scss';
import {
  Link
} from "react-router-dom";

enum Buttons {
  Button1,
  Button2,
  Button3,
}

export interface HeaderProps {
  handleDrawerToggle: () => void;
  handleDrawerClose: () => void;
  handleDrawerClick: () => void;
  incrementVariable: (whichButton:Buttons) => void;
  open: boolean;
  button1: number,
  button2: number,
  button3: number,
}

const linkStyle = {
  color: 'black'
}

const Header = (props:HeaderProps) => {
  const {
    handleDrawerClick,
    handleDrawerToggle,
    handleDrawerClose,
    incrementVariable,
    open,
    button1,
    button2,
    button3,
  } = props;
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div onClick={handleDrawerClose}>
      <AppBar>
        <Toolbar variant="dense" className={styles.headerStyle}>
          <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6">
            Demo!
          </Typography>
          <Drawer
            open={open}
          >
            <div style={{ minWidth: '20vw' }}>
              <Link style ={linkStyle} to='/'>
                <MenuItem onClick={() => handleDrawerClick()}>
                  <AcUnit className={styles.iconSpacing} />
                  Home
                </MenuItem>
              </Link>
              <Link style ={linkStyle} to='/About'>
                <MenuItem onClick={() => handleDrawerClick()}>
                  <AccessAlarm className={styles.iconSpacing} />
                  About
                </MenuItem>
              </Link>
            </div>
          </Drawer>
          <Grid container justify="space-between">
              <Grid item>
                <Button 
                  color="secondary"
                  variant="outlined"
                  size="small"
                  onClick={() => incrementVariable(Buttons.Button1)} 
                  fullWidth={true}
                  disabled={button1 === 10}
                >
                  Click Me!
                  <br></br>
                  {button1}
                </Button>
              </Grid>
              <Grid item>
                <Button 
                  color="secondary"
                  variant="outlined"
                  size="small"
                  onClick={() => incrementVariable(Buttons.Button2)} 
                  fullWidth={true}
                  disabled={button2 === 10}
                >
                  Click Me!
                  <br></br>
                  {button2}
                </Button>
              </Grid>
              <Grid item>
                <Button 
                  color="secondary"
                  variant="outlined"
                  size="small"
                  onClick={() => incrementVariable(Buttons.Button3)} 
                  fullWidth={true}
                  disabled={button3 === 10}
                >
                  Click Me!
                  <br></br>
                  {button3}
                </Button>
              </Grid>
            </Grid>
        </Toolbar>
      </AppBar>
      <Snackbar
        open={button1 === 10 && button2 === 10 && button3 === 10}
        message="Reached 10 clicks!"
      />
    </div>
  );
};

export default Header;