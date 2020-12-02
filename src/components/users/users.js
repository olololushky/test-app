import React, { useEffect, useState } from 'react'
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
import { Route, Switch, Redirect } from 'react-router-dom'
import ModalForm from '../modal-form'

const Users = ({ users, loading, loaded, loadUsers, initialUser }) => {
  useEffect(() => {
    if (!loading && !loaded) {
      loadUsers()
    }
  })
  const [showModalForm, setShowModalForm] = useState(false)

  const handleClose = () => setShowModalForm(false)
  const handleShow = () => setShowModalForm(true)
  return (
    <div className="card-deck container-fluid card-container">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border spinner" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {users &&
        users.map((user) => (
          <User user={user} key={user.login.uuid} handleShow={handleShow} />
        ))}
      {!loading && loaded && !users.length ? <h3>Нет совпадений</h3> : ''}
      <Switch>
        {users.map((user) => (
          <Route
            key={user.login.uuid}
            path={`/users/${user.login.uuid}`}
            render={() => (
              <ModalForm
                show={showModalForm}
                handleClose={handleClose}
                user={user}
                typeOfAction="editUser"
              />
            )}
          />
        ))}
        <Route path="/users/add-user" />
        <Redirect to="/users" />
      </Switch>
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
