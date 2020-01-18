import React, { Fragment } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import { isLoggedInSelector, userIdSelector } from '../../store/selectors';
import { logout } from '../../store/auth/actions';
import { useStyles } from './style';

export default function MaterialNavigation() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const selectedIsLoggedIn = useSelector(state => isLoggedInSelector(state));
  const selectedId = useSelector(state => userIdSelector(state));
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          {!selectedIsLoggedIn && (
            <Fragment>
              <IconButton
                aria-label='application menu'
                aria-controls='main-menu'
                aria-haspopup='true'
                edge='start'
                className={classes.menuButton}
                color='inherit'
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id='main-menu'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  <NavLink
                    to={{
                      pathname: '/',
                      state: {
                        from: location
                      }
                    }}
                    exact
                    className={classes.menuLink}
                  >
                    Home
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink
                    to={{
                      pathname: '/login',
                      state: {
                        from: location
                      }
                    }}
                    exact
                    className={classes.menuLink}
                  >
                    Login
                  </NavLink>
                </MenuItem>
              </Menu>
            </Fragment>
          )}
          <Typography variant='h6' className={classes.title}>
            <NavLink
              to={{
                pathname: '/',
                state: {
                  from: location
                }
              }}
              exact
              className={classes.menuLink}
            >
              Walkit
            </NavLink>
          </Typography>
          {selectedIsLoggedIn && (
            <div>
              <IconButton
                aria-label='account of current user'
                aria-controls='user-menu'
                aria-haspopup='true'
                onClick={handleMenu}
                color='inherit'
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id='user-menu'
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem>
                  <NavLink
                    to={{
                      pathname: '/',
                      state: {
                        from: location
                      }
                    }}
                    exact
                    className={classes.menuLink}
                  >
                    Home
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink
                    to={{
                      pathname: `/profile/${selectedId}`,
                      state: {
                        from: location
                      }
                    }}
                    exact
                    className={classes.menuLink}
                  >
                    Panel
                  </NavLink>
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <NavLink
                    className={classes.menuLink}
                    to={{
                      pathname: '/',
                      state: {
                        from: location
                      }
                    }}
                    exact
                    onClick={() => dispatch(logout())}
                  >
                    Logout
                  </NavLink>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
