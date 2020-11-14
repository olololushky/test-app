import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import InputText from './input-text';
import InputSelect from './input-select';
import { connect } from 'react-redux';
import { editUser, addUser } from '../../redux/actions';
import produce from 'immer';
import { useHistory } from 'react-router-dom';

const ModalForm = ({
  show,
  handleClose,
  user,
  editUser,
  addUser,
  typeOfAction,
}) => {
  const [userData, setUserData] = useState(user);
  let history = useHistory();

  const onSubmit =
    typeOfAction === 'editUser'
      ? () => {
          editUser(userData);
        }
      : typeOfAction === 'addUser'
      ? () => {
          addUser(userData);
          setUserData(user);
        }
      : null;
  return (
    <Modal
      show={show}
      onHide={() => {
        handleClose();
        history.push('/users');
      }}
    >
      <Modal.Header closeButton>
        <Modal.Title>Edit User's Info</Modal.Title>
      </Modal.Header>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleClose();
          onSubmit();
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
                draft.name.title = eventValue;
                return draft;
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
                draft.name.first = eventValue;
                return draft;
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
                draft.name.last = eventValue;
                return draft;
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
                draft.login.username = eventValue;
                return draft;
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
                draft.email = eventValue;
                return draft;
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
                draft.dob.date = eventValue;

                return draft;
              })
            }
          />

          <InputText
            value={userData.location.country}
            typeOfValue="Country"
            onChange={setUserData}
            accessToAnObject={(eventValue) =>
              produce((draft) => {
                draft.location.country = eventValue;
                return draft;
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
                draft.phone = eventValue;
                return draft;
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
                draft.login.password = eventValue;
                return draft;
              })
            }
          />
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              handleClose();
              history.push('/users');
            }}
          >
            Close
          </button>
          <input type="submit" value="Save" className="btn btn-primary" />
        </Modal.Footer>
      </form>
    </Modal>
  );
};

export default connect(null, { editUser, addUser })(ModalForm);

/*

      
  //  const [title, setTitle] = useState(user.name.title);
  //  const [name, setName] = useState(user.name.first);
  //  const [surname, setSurname] = useState(user.name.last);
  //  const [gender, setGender] = useState(user.gender);
 // const [username, setUsername] = useState(user.login.username);
  //const [email, setEmail] = useState(user.email);
 // const [country, setCountry] = useState(user.location.country);
//  const [phone, setPhone] = useState(user.phone);
 // const [password, setPassword] = useState(user.login.password);
        <div className="form-group">
            <label htmlFor="title">Title</label>
            <select
              className="form-control"
              id="title"
              value={userData.name.title}
              placeholder="Edit Title"
              onChange={(e) =>
                setUserData(
                  produce((draft) => {
                    draft.name.title = e.target.value;
                    return draft;
                  })
                )
              }
            >
              <option>Mr</option>
              <option>Mrs</option>
              <option>Ms</option>
              <option>Miss</option>
              <option>Madame</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              id="name"
              value={userData.name.first}
              placeholder="Edit Name"
              onChange={(e) =>
                setUserData(
                  produce((draft) => {
                    draft.name.first = e.target.value;
                    return draft;
                  })
                )
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="surname">Surame</label>
            <input
              className="form-control"
              id="surname"
              value={userData.name.last}
              placeholder="Edit Surname"
              onChange={(e) =>
                setUserData(
                  produce((draft) => {
                    draft.name.last = e.target.value;
                    return draft;
                  })
                )
              }
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select
              className="form-control"
              id="gender"
              value={userData.gender}
              placeholder="Edit Genrder"
              onChange={(e) =>
                setUserData(
                  produce((draft) => {
                    draft.gender = e.target.value;
                    return draft;
                  })
                )
              }
            >
              <option>Female</option>
              <option>Male</option>
            </select>
          </div>  
        
        
        */
