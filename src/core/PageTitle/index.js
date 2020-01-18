import React from 'react';

import { Typography } from '@material-ui/core';

import { useStyles } from './styles';

function PageTitle({ children }) {
  const classes = useStyles();
  return (
    <Typography variant='h3' color='primary' className={classes.title}>
      {children}
    </Typography>
  );
}

export default PageTitle;
