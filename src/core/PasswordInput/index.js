import React from 'react';
import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import { useStyles } from './styles';

export default function PasswordInput({ value, handleChange }) {
  const classes = useStyles();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(currentValue => !currentValue);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <FormControl className={clsx(classes.margin, classes.textField)}>
      <InputLabel htmlFor='standard-adornment-password'>Password</InputLabel>
      <Input
        id='standard-adornment-password'
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
