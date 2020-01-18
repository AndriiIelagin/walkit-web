import { createSelector } from 'reselect';

export const userIdSelector = createSelector(
  state => state.auth.userId,
  userId => userId
);

export const userSelector = createSelector(
  state => state.auth.currentUser,
  currentUser => currentUser
);

export const tokenSelector = createSelector(
  state => state.auth.token,
  token => token
);

export const isLoggedInSelector = createSelector(
  state => state.auth.isLoggedIn,
  isLoggedIn => isLoggedIn
);

export const userListSelector = createSelector(
  state => state.user.userList,
  userList => userList
);
