import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './App.css';
import { authStart } from './store/auth/actions';
import MaterialNavigation from './components/MaterialNavigation';
import Routes from './components/Routes';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token !== '' && token !== null && token !== undefined) {
      dispatch(authStart('', '', token));
    }
  }, []);
  return (
    <div className='App'>
      <MaterialNavigation />
      <Routes />
    </div>
  );
}

export default App;
