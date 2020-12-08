import React from 'react'
import { Form } from 'react-bootstrap'
import './style.css'
import { connect } from 'react-redux'
import { searchUsers, resetFilter } from '../../redux/actions'

const Search = ({ searchUsers, resetFilter }) => {
  return (
    <div>
      <Form
        className="form"
        onSubmit={(ev) => {
          const value = ev.target[0].value
          ev.preventDefault()
          if (value) {
            searchUsers(value)
          } else { resetFilter()}
          
        }}
      >
        <Form.Label>Search</Form.Label>
        <Form.Control placeholder="Enter keywords" />
      </Form>
    </div>
  )
}

export default connect(null, { searchUsers, resetFilter })(Search)
