import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import InputText from './input-text'
import InputSelect from './input-select'
import { connect } from 'react-redux'
import { editUser, addUser } from '../../redux/actions'
import produce from 'immer'
import { useHistory } from 'react-router-dom'

const ModalForm = ({
  show,
  handleClose,
  user,
  editUser,
  addUser,
  typeOfAction,
}) => {
  const [userData, setUserData] = useState(user)
  let history = useHistory()

  const onSubmit = () => {
    switch (typeOfAction) {
      case 'editUser':
        return () => {editUser(userData)}
      case 'addUser':
        return () => {
          addUser(userData)
          setUserData(user)
        }
      default:
        break
    }
  }
  const onHide = () => {
    handleClose()
    history.push('/users')
  }
  const modalHeader = () => {
    switch (typeOfAction) {
      case 'editUser':
        return "Edit User's Info"
      case 'addUser':
        return 'Add User'
      default:
        break
    }
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
    >
      <Modal.Header closeButton>
        <Modal.Title>{modalHeader()}</Modal.Title>
      </Modal.Header>

      <form
        onSubmit={(event) => {
          event.preventDefault()
          onHide()
          onSubmit()()
        }}
      >
        <Modal.Body>
          <InputSelect
            value={userData.name.title}
            typeOfValue="Title"
            required
            options={['', 'Mr', 'Mrs', 'Miss', 'Ms', 'Madame']}
            onChange={setUserData}
            accessToAnObject={(eventValue) =>
              produce((draft) => {
                draft.name.title = eventValue
                return draft
              })
            }
          />

          <InputText
            value={userData.name.first}
            typeOfValue="Name"
            required
            onChange={setUserData}
            accessToAnObject={(eventValue) =>
              produce((draft) => {
                draft.name.first = eventValue
                return draft
              })
            }
          />

          <InputText
            value={userData.name.last}
            typeOfValue="Surname"
            required
            onChange={setUserData}
            accessToAnObject={(eventValue) =>
              produce((draft) => {
                draft.name.last = eventValue
                return draft
              })
            }
          />

          <InputText
            value={userData.login.username}
            typeOfValue="Username"
            required
            onChange={setUserData}
            accessToAnObject={(eventValue) =>
              produce((draft) => {
                draft.login.username = eventValue
                return draft
              })
            }
          />
          <InputText
            value={userData.email}
            typeOfValue="Email"
            typeOfInput="email"
            required
            onChange={setUserData}
            accessToAnObject={(eventValue) =>
              produce((draft) => {
                draft.email = eventValue
                return draft
              })
            }
          />
          <InputText
            value={userData.dob.date.slice(0, 19)}
            typeOfValue="Date"
            typeOfInput="datetime-local"
            onChange={setUserData}
            accessToAnObject={(eventValue) =>
              produce((draft) => {
                draft.dob.date = eventValue

                return draft
              })
            }
          />

          <InputText
            value={userData.location.country}
            typeOfValue="Country"
            onChange={setUserData}
            accessToAnObject={(eventValue) =>
              produce((draft) => {
                draft.location.country = eventValue
                return draft
              })
            }
          />
          <InputText
            value={userData.phone}
            typeOfValue="Phone"
            typeOfInput="tel"
            onChange={setUserData}
            accessToAnObject={(eventValue) =>
              produce((draft) => {
                draft.phone = eventValue
                return draft
              })
            }
          />
          <InputText
            value={userData.login.password}
            typeOfValue="Password"
            typeOfInput="password"
            required
            onChange={setUserData}
            accessToAnObject={(eventValue) =>
              produce((draft) => {
                draft.login.password = eventValue
                return draft
              })
            }
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
