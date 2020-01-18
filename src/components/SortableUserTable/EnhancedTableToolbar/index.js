import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';

import { useToolbarStyles } from './styles';
import DeleteUserDialog from '../../DeleteUserDialog';

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const [openDeleteUserDialog, setOpenDeleteUserDialog] = useState(false);
  const { numSelected, selected } = props;
  const handleDelete = () => {
    setOpenDeleteUserDialog(true);
  };

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color='inherit'
          variant='subtitle1'
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography className={classes.title} variant='h6' id='tableTitle'>
          Users
        </Typography>
      )}

      {numSelected > 0 ? (
        <Tooltip title='Delete'>
          <IconButton
            aria-label='delete'
            onClick={e => {
              e.preventDefault();
              handleDelete();
            }}
          >
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title='Filter list'>
          <IconButton aria-label='filter list'>
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      )}
      {openDeleteUserDialog && (
        <DeleteUserDialog
          openDialog={openDeleteUserDialog}
          userIds={selected['0']}
        />
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired
};

export default EnhancedTableToolbar;
