import React from 'react'
import { Form } from 'react-bootstrap'
import './style.css'
import { connect } from 'react-redux'
import { searchUsers, resetFilter } from '../../redux/actions'

const Search = ({ searchUsers, resetFilter }) => {
  return (
    <>
      <Form
        className="form"
        onSubmit={(ev) => {
          const value = ev.target[0].value
          ev.preventDefault()
          if (value) {
            searchUsers(value)
          } else {
            resetFilter()
          }
          // при нажатии клавиши Enter система фильтрует пользователей с заданными ключевыми словами, если строка пуста - сбрасывает фильтр
        }}
      >
        <Form.Label>Search</Form.Label>
        <Form.Control placeholder="Enter keywords" />
      </Form>
    </>
  )
}

export default connect(null, { searchUsers, resetFilter })(Search)
