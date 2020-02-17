import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import * as firebase from 'firebase';
import 'firebase/auth';
import { createUser, getUser } from '../../../api/api';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

export const Header = ({ user, signOut, signInWithGoogle }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >
      <List>
        yes
      </List>
    </div>
  );

  const signIn = async () => {
    await signInWithGoogle();
    const user = await firebase.auth().currentUser;
    if(user && user.uid && user.email) {
      const test = await getUser(user.uid);
      if(!test.id & test.status===200) {
        createUser(user.uid, user.email);
      }
    }
  };

  return (
    <div className="p-body__nav">
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar disableGutters>
            <IconButton onClick={toggleDrawer('left', true)} edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h4" style={{ flexGrow: 1, color: 'white' }}>
              SmashNotes
            </Typography>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                style={{ flexGrow: "1" }}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                {
                  user ? (
                    <div>
                      <MenuItem onClick={handleClose}>Profil</MenuItem>
                      <MenuItem onClick={() => {handleClose(); signOut();}}>Déconnexion</MenuItem>
                    </div>
                  ) : (
                      <MenuItem onClick={() => {handleClose(); signIn();}}>Connexion via Google</MenuItem>
                  )
                }
              </Menu>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
    </div>
  );
}
