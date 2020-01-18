import {
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  FETCH_SPECIFIC_USERS_START,
  FETCH_SPECIFIC_USERS_SUCCESS,
  FETCH_SPECIFIC_USERS_FAIL,
  DELETE_USER_START,
  DELETE_USER_SUCCESS,
  DELETE_USER_FAIL
} from './types';

export const signupStart = (email, password, role = 'employee') => {
  return {
    type: SIGNUP_START,
    email,
    password,
    role
  };
};

export const signupSuccess = user => {
  return {
    type: SIGNUP_SUCCESS,
    user
  };
};

export const signupFail = error => {
  return {
    type: SIGNUP_FAIL,
    error: error
  };
};

export const fetchSpecificUsersStart = (
  role = 'employee',
  userType = 'all',
  token
) => {
  return {
    type: FETCH_SPECIFIC_USERS_START,
    role,
    userType,
    token
  };
};

export const fetchSpecificUsersSuccess = userList => {
  return {
    type: FETCH_SPECIFIC_USERS_SUCCESS,
    userList
  };
};

export const fetchSpecificUsersFail = error => {
  return {
    type: FETCH_SPECIFIC_USERS_FAIL,
    error
  };
};

export const deleteUserStart = (userIds, token) => {
  return {
    type: DELETE_USER_START,
    userIds,
    token
  };
};

export const deleteUserSuccess = userIds => {
  return {
    type: DELETE_USER_SUCCESS,
    userIds
  };
};

export const deleteUserFail = error => {
  return {
    type: DELETE_USER_FAIL,
    error
  };
};
