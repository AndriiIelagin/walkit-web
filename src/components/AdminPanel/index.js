import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

// import './style.css';
import { useStyles } from './styles';
import { useInput } from '../../hooks/useInput';
import { fetchSpecificUsersStart } from '../../store/user/actions';
import {
  userListSelector,
  userSelector,
  tokenSelector
} from '../../store/selectors';
import SortableUserTable from '../SortableUserTable';
import EnhancedTable from '../EnhancedTable';
import UserTypeSelect from './UserTypeSelect';
import PageTitle from '../../core/PageTitle';
import SimpleButton from '../../core/SimpleButton';

const options = ['all', 'employee', 'manager'];

function AdminPanel() {
  const dispatch = useDispatch();
  const location = useLocation();
  const classes = useStyles();
  const selectedUserList = useSelector(state => userListSelector(state));
  const selectedUser = useSelector(state => userSelector(state));
  const selectedToken = useSelector(state => tokenSelector(state));
  const [listOption, handleListOption] = useInput('all');

  useEffect(() => {
    dispatch(
      fetchSpecificUsersStart(selectedUser.role, listOption, selectedToken)
    );
  }, [listOption, dispatch, selectedUser, selectedToken]);
  return (
    <div>
      <PageTitle variant='h3'>ADMIN PANEL: {selectedUser.email}</PageTitle>
      <UserTypeSelect
        value={listOption}
        handleChange={handleListOption}
        options={options}
      />
      <SortableUserTable userList={selectedUserList} />
      {/* <EnhancedTable /> */}
      <SimpleButton type='button'>
        <NavLink
          to={{
            pathname: '/signup',
            state: {
              from: location
            }
          }}
          exact
          className={classes.menuLink}
        >
          Add User
        </NavLink>
      </SimpleButton>
    </div>
  );
}

export default AdminPanel;
