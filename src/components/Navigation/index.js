import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './styles.css';
import { userIdSelector } from '../../store/selectors';
import { logout } from '../../store/auth/actions';

function Navigation() {
  const location = useLocation();
  const dispatch = useDispatch();
  const selectedUserId = useSelector(state => userIdSelector(state));
  return (
    <div>
      <ul className='nav'>
        <li className='nav_item'>
          <NavLink
            to={{
              pathname: '/',
              state: {
                from: location
              }
            }}
            exact
            activeClassName='nav_item_active'
          >
            Home
          </NavLink>
        </li>
        {!selectedUserId ? (
          <React.Fragment>
            <li className='nav_item'>
              <NavLink
                to={{
                  pathname: '/login',
                  state: {
                    from: location
                  }
                }}
                exact
                activeClassName='nav_item_active'
              >
                Login
              </NavLink>
            </li>
            <li className='nav_item'>
              <NavLink
                to={{
                  pathname: '/signup',
                  state: {
                    from: location
                  }
                }}
                exact
                activeClassName='nav_item_active'
              >
                Signup
              </NavLink>
            </li>
          </React.Fragment>
        ) : (
          <li className='nav_item'>
            <NavLink
              to={{
                pathname: '/login',
                state: {
                  from: location
                }
              }}
              onClick={() => dispatch(logout())}
              exact
              activeClassName='nav_item_active'
            >
              Logout
            </NavLink>
          </li>
        )}

        <li className='nav_item'>
          <NavLink
            to={{
              pathname: `/manager`,
              state: { from: location }
            }}
            exact
            activeClassName='nav_item_active'
          >
            Manager Panel
          </NavLink>
        </li>

        <li className='nav_item'>
          <NavLink
            to={{
              pathname: `/profile/${selectedUserId}`,
              state: { from: location }
            }}
            exact
            activeClassName='nav_item_active'
          >
            Admin Panel
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navigation;
