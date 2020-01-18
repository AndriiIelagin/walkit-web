import React from 'react';

import { Button } from '@material-ui/core';

import { useStyles } from './styles';

export default function SimpleButton({ buttonType = 'submit', children }) {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant='contained'
        color='primary'
        type={buttonType}
        className={classes.margin}
      >
        {children}
      </Button>
    </div>
  );
}
