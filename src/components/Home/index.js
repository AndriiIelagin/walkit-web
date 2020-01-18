import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { Button, Typography } from '@material-ui/core';

import { userSelector, isLoggedInSelector } from '../../store/selectors';
import * as commonStyles from '../../common/assets/styles';
import PageTitle from '../../core/PageTitle';

function Home() {
  const location = useLocation();
  const selectedUser = useSelector(state => userSelector(state));
  const selectedIsLoggedIn = useSelector(state => isLoggedInSelector(state));
  return (
    <div>
      <PageTitle>Home</PageTitle>
      {selectedIsLoggedIn ? (
        <Typography variant='h4'>Welcome, {selectedUser.email}</Typography>
      ) : (
        <div>
          <h3>Login, please</h3>
          <Button variant='contained' color='primary'>
            <NavLink
              to={{
                pathname: '/login',
                state: {
                  from: location
                }
              }}
              exact
              style={commonStyles.menuLink}
            >
              Login
            </NavLink>
          </Button>
        </div>
      )}
    </div>
  );
}

export default Home;
