import { put, call, takeLatest, all } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'connected-react-router';

import * as actions from './actions';
import { authStart } from '../auth/actions';
import {
  fetchSpecificUsersSuccess,
  fetchSpecificUsersFail,
  deleteUserSuccess,
  deleteUserFail
} from './actions';
import {
  SIGNUP_START,
  FETCH_SPECIFIC_USERS_START,
  DELETE_USER_START
} from './types';
import {
  signupUrl,
  fetchAllUsersUrl,
  fetchManagersUrl,
  fetchEmployeesUrl,
  deleteUserUrl
} from './constants';

export default function* watchUserSaga() {
  yield takeLatest(SIGNUP_START, signup);
  yield takeLatest(FETCH_SPECIFIC_USERS_START, fetchSpecificUsers);
  yield takeLatest(DELETE_USER_START, deleteUser);
}

function* signup(action) {
  const { email, password, role } = action;
  try {
    const signupUser = yield call(() =>
      axios.post(signupUrl, {
        email,
        password,
        role
      })
    );
    yield put(actions.signupSuccess());
    // yield put(authStart(signupUser.data.email, signupUser.data.password));
  } catch (error) {
    yield put(actions.signupFail(error.message));
  }
}

const fetchUsersApi = (role, url, token) =>
  axios.get(url, {
    headers: { Authorization: `bearer ${token}` },
    params: {
      role: role
    }
  });

function* fetchSpecificUsers(action) {
  const { role, userType, token } = action;
  let userList = {};
  try {
    switch (userType) {
      case 'all':
        userList = yield call(() =>
          fetchUsersApi(role, fetchAllUsersUrl, token)
        );
        break;
      case 'employee':
        userList = yield call(() =>
          fetchUsersApi(role, fetchEmployeesUrl, token)
        );
        break;
      case 'manager':
        userList = yield call(() =>
          fetchUsersApi(role, fetchManagersUrl, token)
        );
        break;
      default:
        userList = yield call(() =>
          fetchUsersApi(role, fetchAllUsersUrl, token)
        );
        break;
    }
    yield put(fetchSpecificUsersSuccess(userList.data));
  } catch (error) {
    yield put(fetchSpecificUsersFail(error.message));
  }
}

const deleteUserApi = (url, id, token) =>
  axios.delete(url, {
    headers: { Authorization: `bearer ${token}` }
  });

function* deleteUser(action) {
  const { userIds, token } = action;
  console.log('typeof userIds', typeof action.userIds);
  console.log('userIds', action.userIds);
  try {
    // yield all(
    //   userIds.map(id => {
    //     return call(() => deleteUserApi(`${deleteUserUrl}/${id}`, token));
    //   })
    // );
    // yield userIds.map(id => {
    //   return call(() => deleteUserApi(`${deleteUserUrl}/${id}`, id, token));
    // });
    // yield call(() =>
    //   axios.delete(`http://localhost:3000/users/${userIds}`, {
    //     // headers: { Authorization: `bearer ${token}` },
    //   })
    // );
    yield call(() => deleteUserApi(`${deleteUserUrl}/${userIds}`, token));
    yield put(deleteUserSuccess(userIds));
  } catch (error) {
    yield put(deleteUserFail(error.message));
  }
}
