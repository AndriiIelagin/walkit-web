import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';

import { useInput } from '../../../hooks/useInput';
import { signupStart } from '../../../store/user/actions';
import InputWithIcon from '../../../core/InputWithIcon';
import PasswordInput from '../../../core/PasswordInput';
import SimpleButton from '../../../core/SimpleButton';
import PageTitle from '../../../core/PageTitle';
import UserTypeSelect from '../../AdminPanel/UserTypeSelect';

const options = ['admin', 'manager', 'employee'];

function CreateUserForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [email, handleEmail, resetEmail] = useInput('');
  const [password, handlePassword, resetPassword] = useInput('');
  const [role, handleRole, resetRole] = useInput('employee');

  const handleSubmit = e => {
    e.preventDefault();
    resetEmail();
    resetPassword();
    resetRole();
    dispatch(signupStart(email, password, role));
  };
  return (
    <div>
      <PageTitle>Create New User</PageTitle>
      <form onSubmit={handleSubmit}>
        <InputWithIcon value={email} handleChange={handleEmail} />
        <PasswordInput value={password} handleChange={handlePassword} />
        <UserTypeSelect
          value={role}
          handleChange={handleRole}
          options={options}
        />
        <SimpleButton type='submit'>Add User</SimpleButton>
      </form>
      <Button color='primary' onClick={() => history.goBack()}>
        Back
      </Button>
    </div>
  );
}

export default CreateUserForm;
