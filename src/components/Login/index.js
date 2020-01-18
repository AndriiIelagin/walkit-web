import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useInput } from '../../hooks/useInput';
import { authStart } from '../../store/auth/actions';

function Login() {
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, handleEmail, resetEmail] = useInput('');
  const [password, handlePassword, resetPassword] = useInput('');

  const handleSubmit = e => {
    e.preventDefault();
    resetEmail();
    resetPassword();
    dispatch(authStart(email, password));
  };
  return (
    <div>
      <h2>Login</h2>
      <button onClick={() => history.goBack()}>Back</button>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            placeholder='Email'
            value={email}
            onChange={handleEmail}
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type='password'
            id='password'
            placeholder='Password'
            value={password}
            onChange={handlePassword}
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      <div>
        Email: {email} Password: {password}
      </div>
    </div>
  );
}

export default Login;
