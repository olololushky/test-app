import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadUsers } from '../../redux/actions';
import {
  usersListSelector,
  usersLoadedSelector,
  usersLoadingSelector,
} from '../../redux/selectors';
import { createStructuredSelector } from 'reselect';
import User from '../user';

const Users = ({ users, loading, loaded, loadUsers }) => {
  useEffect(() => {
    if (!loading && !loaded) {
      loadUsers();
    }
  });
  return (
    <div className="container-fluid">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div className="row row-cols-1 row-cols-md-2">
        {users
          ? users.map((user) => <User user={user} key={user.login.uuid} />)
          : null}
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  users: usersListSelector,
  loading: usersLoadingSelector,
  loaded: usersLoadedSelector,
});

export default connect(mapStateToProps, { loadUsers })(Users);
