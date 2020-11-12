import React, { useState } from 'react';
import ModalForm from '../modal-form';
import { connect } from 'react-redux';
import { initialUserSelector } from '../../redux/selectors';
import { createStructuredSelector } from 'reselect';
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap';
import { filterByMale, filterByAge, filterByFemale } from '../../redux/actions';

const Header = ({ initialUser, filterByMale, filterByFemale, filterByAge }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Test React App</span>

        <DropdownButton
          as={ButtonGroup}
          title="Filter"
          id="bg-nested-dropdown"
          style={{
            position: 'absolute',
            left: '50%',
            width: '100px',
            marginLeft: '-50px',
          }}
        >
          <Dropdown.Item onClick={filterByMale} eventKey="1">
            Male
          </Dropdown.Item>
          <Dropdown.Item onClick={filterByFemale} eventKey="2">
            Famale
          </Dropdown.Item>
          <Dropdown.Item onClick={filterByAge} eventKey="2">
            Older Than 30
          </Dropdown.Item>
        </DropdownButton>
        <button
          className="btn btn-outline-success my-2 my-sm-0"
          type="button"
          onClick={handleShow}
        >
          Add User
        </button>
      </nav>
      <ModalForm
        show={show}
        handleClose={handleClose}
        user={initialUser}
        typeOfAction="addUser"
      />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  initialUser: initialUserSelector,
});

export default connect(mapStateToProps, {
  filterByMale,
  filterByAge,
  filterByFemale,
})(Header);
