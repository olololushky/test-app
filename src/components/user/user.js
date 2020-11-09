import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeUser } from '../../redux/actions';
import ModalForm from '../modal-form';

const User = ({ user, removeUser }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const fill =
    user.gender === 'male'
      ? 'blue'
      : user.gender === 'female'
      ? 'pink'
      : 'white';
  return (
    <div className="col mb-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {`${user.name.title} ${user.name.first} ${user.name.last}`}
            <svg style={{ height: '20px', width: '20px' }}>
              <circle cx="10" cy="10" r="10" fill={fill} />
            </svg>
          </h5>
          <h6 className="card-subtitle mb-2 text-muted">
            {user.login.username}
          </h6>

          <p className="card-text">
            Email: <a href={`mailto:${user.email}`}>{user.email} </a>
            <br />
            Birth year: {new Date(user.dob.date).getFullYear()} <br />
            Age: {user.dob.age} <br />
            Country: {user.location.country}
          </p>

          <p
            style={{
              color: Number(user.phone.slice(-1)) % 2 ? 'green' : 'red',
            }}
            className="card-text"
          >
            Phone: {user.phone} <br />
          </p>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => removeUser(user.login.uuid)}
          >
            Delete User
          </button>
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleShow}
            style={{ marginLeft: '10px' }}
          >
            Edit User
          </button>

          <ModalForm show={show} handleClose={handleClose} user={user} />
        </div>
      </div>
    </div>
  );
};

export default connect(null, { removeUser })(User);
