import React, { Fragment } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Home from '../Home';
import LoginForm from '../Forms/LoginForm';
import AdminPanel from '../AdminPanel';
import ProtectedRoute from './ProtectedRoute';
import ManagerPanel from '../ManagerPanel';
import CreateUserForm from '../Forms/CreateUserForm';

function Routes() {
  return (
    <Fragment>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={LoginForm} />
        <Route exact path='/signup' component={CreateUserForm} />
        <ProtectedRoute exact path='/profile/:id' userRole='admin'>
          <AdminPanel />
        </ProtectedRoute>
        <ProtectedRoute exact path='/manager' userRole='manager'>
          <ManagerPanel />
        </ProtectedRoute>
      </Switch>
    </Fragment>
  );
}

export default withRouter(Routes);
