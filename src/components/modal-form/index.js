import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import InputText from './input-text'
import InputSelect from './input-select'
import { connect } from 'react-redux'
import { editUser, addUser } from '../../redux/actions'
import { useHistory } from 'react-router-dom'
import { titleOptions } from '../../config/constants'

const ModalForm = ({
  show,
  handleClose,
  user,
  editUser,
  addUser,
  typeOfAction,
}) => {
  const [userData, setUserData] = useState(user) //добавление в state юзера пришедшего в пропах, организация изменения его свойств
  let history = useHistory()

  const onSubmit = () => {
    switch (typeOfAction) {
      case 'editUser':
        editUser(userData)
        break
      case 'addUser':
        addUser(userData)
        setUserData(user) // при добавлении нового пользователя так же происходит сброс данных в state
        break
      default:
        break
    }
  }
  const onHide = () => {
    handleClose()
    history.push('/users')
  }
  const modalHeader = () => {
    //изменение заголовка мобильного окна в зависимости от типа действия
    switch (typeOfAction) {
      case 'editUser':
        return "Edit User's Info"
      case 'addUser':
        return 'Add User'
      default:
        break
    }
  }

  const handleFieldChange = (value, name) => {
    setUserData({
      ...userData,
      [name]: value.target.value,
    })
  }

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{modalHeader()}</Modal.Title>
      </Modal.Header>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          onHide()
          onSubmit()
        }}
      >
        <Modal.Body>
          <InputSelect
            value={userData.title}
            typeOfValue="Title"
            required
            options={titleOptions}
            onChange={handleFieldChange}
            name="title"
          />

          <InputText
            value={userData.name}
            typeOfValue="Name"
            required
            onChange={handleFieldChange}
            name="name"
          />

          <InputText
            value={userData.surname}
            typeOfValue="Surname"
            required
            onChange={handleFieldChange}
            name="surname"
          />

          <InputText
            value={userData.username}
            typeOfValue="Username"
            required
            onChange={handleFieldChange}
            name="username"
          />
          <InputText
            value={userData.email}
            typeOfValue="Email"
            typeOfInput="email"
            required
            onChange={handleFieldChange}
            name="email"
          />
          <InputText
            value={userData.date.slice(0, 19)}
            typeOfValue="Date"
            typeOfInput="datetime-local"
            onChange={handleFieldChange}
            name="date"
          />

          <InputText
            value={userData.country}
            typeOfValue="Country"
            onChange={handleFieldChange}
            name="country"
          />
          <InputText
            value={userData.phone}
            typeOfValue="Phone"
            typeOfInput="tel"
            onChange={handleFieldChange}
            name="phone"
          />
          <InputText
            value={userData.password}
            typeOfValue="Password"
            typeOfInput="password"
            required
            onChange={handleFieldChange}
            name="password"
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              handleClose()
              history.push('/users')
            }}
          >
            Close
          </button>
          <input type="submit" value="Save" className="btn btn-primary" />
        </Modal.Footer>
      </form>
    </Modal>
  )
}

export default connect(null, { editUser, addUser })(ModalForm)
