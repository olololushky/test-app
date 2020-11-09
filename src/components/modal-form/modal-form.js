import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import InputText from './input-text';
import InputSelect from './input-select';

const ModalForm = ({ show, handleClose, user }) => {
  // const [userData, setUserData] = useState(user);
  const [title, setTitle] = useState(user.name.title);
  const [name, setName] = useState(user.name.first);
  const [surname, setSurname] = useState(user.name.last);
  const [gender, setGender] = useState(user.gender);
  const [username, setUsername] = useState(user.login.username);
  const [email, setEmail] = useState(user.email);
  const [country, setCountry] = useState(user.location.country);
  const [phone, setPhone] = useState(user.phone);
  const [password, setPassword] = useState(user.login.password);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit User's Data</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form>
          <InputSelect
            value={title}
            typeOfValue="Title"
            options={['Mr', 'Mrs', 'Miss', 'Ms', 'Madame']}
            onChange={setTitle}
          />
          <InputText value={name} typeOfValue="Name" onChange={setName} />
          <InputText
            value={surname}
            typeOfValue="Surname"
            onChange={setSurname}
          />
          <InputSelect
            value={gender}
            options={['female', 'male']}
            typeOfValue="Gender"
            onChange={setGender}
          />
          <InputText
            value={username}
            typeOfValue="Username"
            onChange={setUsername}
          />
          <InputText
            value={email}
            typeOfValue="Email"
            typeOfInput="email"
            onChange={setEmail}
          />
          <InputText
            value={country}
            typeOfValue="Country"
            onChange={setCountry}
          />
          <InputText
            value={phone}
            typeOfValue="Phone"
            typeOfInput="tel"
            onChange={setPhone}
          />
          <InputText
            value={password}
            typeOfValue="Password"
            typeOfInput="password"
            onChange={setPassword}
          />
        </form>
      </Modal.Body>
      <Modal.Footer>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={handleClose}
        >
          Close
        </button>
        <button type="button" className="btn btn-primary" onClick={handleClose}>
          Save
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalForm;
