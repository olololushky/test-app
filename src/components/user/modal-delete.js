import React from 'react';
import {Modal, Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import { removeUser } from '../../redux/actions'

function ModalDelete({show, handleCloseModalDelete, removeUser, user}) {


  return (
    <>
      <Modal
        show={show}
        onHide={handleCloseModalDelete}
      >
        <Modal.Header closeButton>
          <Modal.Title>{`Delete user ${user && user.username}?`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          This action can not be undone. Are you sure?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModalDelete}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => removeUser(user && user.id)}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default connect(null, {removeUser})(ModalDelete)