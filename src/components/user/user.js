import React, { useState } from 'react'
import { connect } from 'react-redux'
import { removeUser } from '../../redux/actions'
import ModalForm from '../modal-form'
import { Link, Route } from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.css'

const User = ({ user, removeUser }) => {
  const [showModalForm, setShowModalForm] = useState(false)

  const handleClose = () => setShowModalForm(false)
  const handleShow = () => setShowModalForm(true)
  const fill = () => {
    switch (user.gender) {
      case 'male':
        return 'blue'
      case 'female':
        return 'pink'
      default:
        return 'white'
    }
  }
  const userName = `${user.name.title} ${user.name.first} ${user.name.last}`
  const birthYear = new Date(user.dob.date).getFullYear() || 'Before our age'
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title header">
          {userName}
          <svg style={{ height: '20px', width: '20px' }}>
            <circle cx="10" cy="10" r="10" fill={fill()} />
          </svg>
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{user.login.username}</h6>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Email: <a href={`mailto:${user.email}`}>{user.email} </a>
        </li>
        <li className="list-group-item">Birth year: {birthYear}</li>
        <li className="list-group-item">Age: {user.dob.age || 'Too old'} </li>
        <li className="list-group-item">Country: {user.location.country || 'Citizen of the world'}</li>
        <li
          className={`list-group-item ${
            Number(user.phone.slice(-1)) % 2 ? 'green' : 'red'
          }`}
        >
          Phone: {user.phone || 'No Phone'} <br />
        </li>
        <li className="list-group-item">
          Picture:{' '}
          <a className="card-link" href={user.picture.large} target="blank">
            {user.picture.large}
          </a>
        </li>
      </ul>
      <div className="card-footer footer">
        <button
          type="button"
          className="btn btn-danger button"
          onClick={() => removeUser(user && user.login && user.login.uuid)}
        >
          Delete User
        </button>

        <Link
          className="btn btn-primary button"
          to={`/users/${user.login.uuid}`}
          onClick={handleShow}
          style={{ marginLeft: '10px' }}
        >
          Edit User
        </Link>

        <Route
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
      </div>
    </div>
  )
}

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.shape({
      title: PropTypes.string.isRequired,
      first: PropTypes.string.isRequired,
      last: PropTypes.string.isRequired,
    }),
  }).isRequired,
}

export default connect(null, { removeUser })(User)
