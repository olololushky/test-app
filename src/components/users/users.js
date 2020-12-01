import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from '../../redux/actions'
import {
  usersListSelector,
  usersLoadedSelector,
  usersLoadingSelector,
} from '../../redux/selectors'
import { createStructuredSelector } from 'reselect'
import User from '../user'
import PropTypes from 'prop-types'
import './style.css'

const Users = ({ users, loading, loaded, loadUsers }) => {
  useEffect(() => {
    if (!loading && !loaded) {
      loadUsers()
    }
  })
  return (
    <div className="card-deck container-fluid card-container">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border spinner" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {users && users.map((user) => <User user={user} key={user.login.uuid} />)}
      {!loading && loaded && !users.length ? <h3>Нет совпадений</h3> : ''}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  users: usersListSelector,
  loading: usersLoadingSelector,
  loaded: usersLoadedSelector,
})

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      login: PropTypes.shape({
        uuid: PropTypes.string.isRequired,
      }),
    }).isRequired
  ),
}

export default connect(mapStateToProps, { loadUsers })(Users)
