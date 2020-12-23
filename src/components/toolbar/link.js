import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const LinkButton = ({ handleShow }) => (
  <Link
    //className="button"
    to="/users/add-user"
    onClick={handleShow}
  >
    Add User
  </Link>
)

export default LinkButton
