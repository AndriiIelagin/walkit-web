import { put, call, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { push } from 'connected-react-router';

import * as actions from './actions';
import { AUTH_START, AUTH_LOGOUT } from './types';
import { loginUrl, tokenUrl } from './constants';

export default function* watchAuthSaga() {
  yield takeLatest(AUTH_START, auth);
  yield takeLatest(AUTH_LOGOUT, logout);
}

function authApi(data) {
  return axios.request({
    method: data[0],
    url: data[1],
    data: data[2],
    headers: data[3]
  });
}

function* login(token) {
  const getUserResponse = yield call(() =>
    axios.get(loginUrl, {
      headers: { Authorization: `bearer ${token}` }
    })
  );
  const user = getUserResponse.data;
  localStorage.setItem('userId', user.id);
  localStorage.setItem('user', user);
  localStorage.setItem('role', user.role);
  yield put(actions.authSuccess(token, user.id, user));
  if (user.role === 'admin') {
    yield put(push(`/profile/${user.id}`));
  } else if (user.role === 'manager') {
    yield put(push(`/manager`));
  }
}

function* auth(action) {
  try {
    if (action.token) {
      yield call(login, action.token);
    } else {
      // to refactor
      const getToken = yield call(authApi, [
        'POST',
        tokenUrl,
        {
          email: action.email,
          password: action.password
        },
        {
          'Content-Type': 'application/json'
        }
      ]);
      const { token } = getToken.data.data;
      localStorage.setItem('token', token);
      yield call(login, token);
    }
  } catch (error) {
    yield put(actions.authFail(error.message));
  }
}

function* logout(action) {}
