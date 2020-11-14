import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeUser } from '../../redux/actions';
import ModalForm from '../modal-form';
import { Link, Route } from 'react-router-dom';

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
    <div className="card" style={{ flexBasis: '250px', marginBottom: '20px' }}>
      <div className="card-body">
        <h5 className="card-title">
          {`${user.name.title} ${user.name.first} ${user.name.last}`}
          <svg style={{ height: '20px', width: '20px' }}>
            <circle cx="10" cy="10" r="10" fill={fill} />
          </svg>
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">{user.login.username}</h6>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          Email: <a href={`mailto:${user.email}`}>{user.email} </a>
        </li>
        <li className="list-group-item">
          Birth year: {new Date(user.dob.date).getFullYear()}{' '}
        </li>
        <li className="list-group-item">Age: {user.dob.age} </li>
        <li className="list-group-item">Country: {user.location.country}</li>
        <li
          className="list-group-item"
          style={{
            color: Number(user.phone.slice(-1)) % 2 ? 'green' : 'red',
          }}
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
      <div className="card-footer">
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => removeUser(user.login.uuid)}
        >
          Delete User
        </button>

        <Link
          className="btn btn-primary"
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
              show={show}
              handleClose={handleClose}
              user={user}
              typeOfAction="editUser"
            />
          )}
        />
      </div>
    </div>
  );
};

export default connect(null, { removeUser })(User);
