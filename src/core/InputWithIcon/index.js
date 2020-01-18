import React from 'react';

import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import AccountCircle from '@material-ui/icons/AccountCircle';

import { useStyles } from './styles';

export default function InputWithIcon({ value, handleChange }) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor='input-with-icon-adornment'>Email</InputLabel>
        <Input
          id='input-with-icon-adornment'
          startAdornment={
            <InputAdornment position='start'>
              <AccountCircle />
            </InputAdornment>
          }
          value={value}
          onChange={handleChange}
        />
      </FormControl>
    </div>
  );
}
