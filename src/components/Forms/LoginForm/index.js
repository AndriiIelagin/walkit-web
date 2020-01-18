import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';

import { useInput } from '../../../hooks/useInput';
import { authStart } from '../../../store/auth/actions';
import InputWithIcon from '../../../core/InputWithIcon';
import PasswordInput from '../../../core/PasswordInput';
import SimpleButton from '../../../core/SimpleButton';
import PageTitle from '../../../core/PageTitle';

function LoginForm() {
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
      <PageTitle>Login</PageTitle>
      <form onSubmit={handleSubmit}>
        <InputWithIcon value={email} handleChange={handleEmail} />
        <PasswordInput value={password} handleChange={handlePassword} />
        <SimpleButton type='submit'>Login</SimpleButton>
      </form>
      <Button color='primary' onClick={() => history.goBack()}>
        Back
      </Button>
    </div>
  );
}

export default LoginForm;
