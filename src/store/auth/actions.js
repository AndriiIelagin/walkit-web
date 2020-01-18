import {
  AUTH_START,
  AUTH_SUCCESS,
  AUTH_FAIL,
  AUTH_LOGOUT,
  AUTO_LOGIN_START,
  AUTO_LOGIN_SUCCESS,
  AUTO_LOGIN_FAIL
} from './types';

export const authStart = (email = '', password = '', token = null) => {
  return {
    type: AUTH_START,
    email,
    password,
    token
  };
};

export const authSuccess = (token, userId, user) => {
  return {
    type: AUTH_SUCCESS,
    token: token,
    userId: userId,
    currentUser: user
  };
};

export const authFail = error => {
  return {
    type: AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('userId');
  localStorage.removeItem('role');
  return {
    type: AUTH_LOGOUT
  };
};

export const autoLoginStart = () => {
  return {
    type: AUTO_LOGIN_START
  };
};

export const autoLoginSuccess = () => {
  return {
    type: AUTO_LOGIN_SUCCESS
  };
};

export const autoLoginFail = () => {
  return {
    type: AUTO_LOGIN_FAIL
  };
};

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};
