import { all } from 'redux-saga/effects';

import watchAuthSaga from './auth/sagas';
import watchUserSaga from './user/sagas';

export default function* rootSaga() {
  yield all([watchAuthSaga(), watchUserSaga()]);
}
