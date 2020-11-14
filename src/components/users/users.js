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
    <div
      className="card-deck container-fluid"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginLeft: '0',
      }}
    >
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {users
        ? users.map((user) => <User user={user} key={user.login.uuid} />)
        : null}
      {!loading && loaded && !users.length ? <h3>Нет совпадений</h3> : null}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  users: usersListSelector,
  loading: usersLoadingSelector,
  loaded: usersLoadedSelector,
});

export default connect(mapStateToProps, { loadUsers })(Users);
