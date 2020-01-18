import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as authReducer } from './auth/reducer';
import { reducer as userReducer } from './user/reducer';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    auth: authReducer,
    user: userReducer
  });

export default createRootReducer;
