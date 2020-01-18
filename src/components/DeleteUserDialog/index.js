import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { deleteUserStart } from '../../store/user/actions';
import { tokenSelector } from '../../store/selectors';

function DeleteUserDialog({ openDialog = false, userIds = [] }) {
  const [open, setOpen] = useState(openDialog);
  const dispatch = useDispatch();

  const selectedToken = useSelector(state => tokenSelector(state));

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = e => {
    e.preventDefault();
    // console.log('From Dialog userIds', userIds);
    // dispatch(deleteUserStart(userIds, selectedToken));
    // handleClose();
    axios
      .delete(`http://localhost:3000/users/${userIds}`)
      .then(res => {
        console.log('deleted!!!!!!!', res);
        handleClose();
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>
          {'Are you sure you want to delete user?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-description'>
            If you press OK, user will be deleted. Cancel button will bring you
            back.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color='secondary'>
            Cancel
          </Button>
          <Button onClick={e => handleDelete(e)} color='secondary' autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default DeleteUserDialog;
