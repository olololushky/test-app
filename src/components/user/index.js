import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './style.css'
import ModalDelete from './modal-delete'

const User = ({ user, handleShow }) => {
  const [showModalDelete, setShowModalDelete] = useState(false)

  const handleCloseModalDelete = () => setShowModalDelete(false)
  const handleShowModalDelete = () => setShowModalDelete(true)

  const fill = () => {
    switch (user.gender) {
      case 'male':
        return 'blue'
      case 'female':
        return 'pink'
      default:
        return 'white'
    }
  } //цвет заполнения круга сигнализируещего о поле юзера
  const userName = `${user.title} ${user.name} ${user.surname}`
  const birthYear = new Date(user.date).getFullYear() || 'Before our age'
  return (
    <div className="card" data-id="user">
      <div className="card-body">
        <h5 className="card-title header">
          {userName}
          <svg style={{ height: '20px', width: '20px' }}>
            <circle cx="10" cy="10" r="10" fill={fill()} />
          </svg>
        </h5>
        <h6 className="card-subtitle mb-2 text-muted" data-id="user-username">
          {user.username}
        </h6>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Email: <a href={`mailto:${user.email}`}>{user.email} </a>
        </li>
        <li className="list-group-item">Birth year: {birthYear}</li>
        <li className="list-group-item">Age: {user.age || 'Too old'} </li>
        <li className="list-group-item">
          Country: {user.country || 'Citizen of the world'}
        </li>
        <li
          className={`list-group-item ${
            Number(user.phone.slice(-1)) % 2 ? 'green' : 'red'
          }`}
          // изменение цвета телефонного номера в зависимости от того четное число на конце или нет
        >
          Phone: {user.phone || 'No Phone'} <br />
        </li>
        <li className="list-group-item">
          {`Picture: `}
          <a className="card-link" href={user.picture} target="blank">
            {user.picture}
          </a>
        </li>
      </ul>
      <div className="card-footer footer">
        <button
          type="button"
          className="btn btn-danger button"
          onClick={() => {
            handleShowModalDelete() //при нажатии отображается модальное окно с информацией об удалении
          }}
        >
          <i class="fa fa-trash" aria-hidden="true"></i>
          {` Delete`}
        </button>

        <Link
          className="btn btn-primary button"
          to={`/users/${user.id}`}
          onClick={handleShow}
          style={{ marginLeft: '10px' }}
        >
          <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
          {` Edit`}
        </Link>
        <ModalDelete
          show={showModalDelete}
          handleCloseModalDelete={handleCloseModalDelete}
          user={user}
        />
      </div>
    </div>
  )
}

User.propTypes = {
  user: PropTypes.shape({
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    surname: PropTypes.string.isRequired,
  }).isRequired,
}

export default User
