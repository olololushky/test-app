import React, { useState, useEffect } from 'react'
import ModalForm from '../modal-form'
import { connect } from 'react-redux'
import { initialUserSelector } from '../../redux/selectors'
import { createStructuredSelector } from 'reselect'
import { Dropdown, DropdownButton, ButtonGroup } from 'react-bootstrap'
import { filterByMale, filterByAge, filterByFemale, resetFilter } from '../../redux/actions'
import { Link, Route, useLocation } from 'react-router-dom'
import './style.css'

const Header = ({ initialUser, filterByMale, filterByFemale, filterByAge, resetFilter }) => {
  const [showModalForm, setShowModalForm] = useState(false) //индикатор открытия модальной формы добавления пользователя и обработчики
  const handleClose = () => setShowModalForm(false)
  const handleShow = () => setShowModalForm(true)

  const location = useLocation()

  useEffect(() => {
    if (location.pathname.endsWith('/add-user')) {
      handleShow() //если при загрузке страницы в браузерной строке присутсвует "add-user", происходит открытие формы добавления пользователя
    }
  })

  const dropDownList = [
    {
      key: '1',
      title: 'Male',
      onClick: filterByMale,
    },
    {
      key: '2',
      title: 'Female',
      onClick: filterByFemale,
    },
    {
      key: '3',
      title: 'Older Than 30',
      onClick: filterByAge,
    },
  ] //варианты фильтрации

  return (
    <div>
      <nav className="navbar navbar-light bg-light">
        <Link to="/" className="navbar-brand mb-0 h1" onClick={resetFilter}>
          Test React App
        </Link>

        <DropdownButton
          as={ButtonGroup}
          title="Filter"
          id="bg-nested-dropdown"
          className="dropdown-group"
        >
          {dropDownList.map((item, i) => (
            <Dropdown.Item onClick={item.onClick} key={i} eventKey={item.key}>
              {item.title}
            </Dropdown.Item>
          ))}
        </DropdownButton>
        <Link
          className="btn btn-primary"
          to="/users/add-user"
          onClick={handleShow}
        >
          Add User
        </Link>
      </nav>
      <Route
        path="/users/add-user"
        render={() => (
          <ModalForm
            show={showModalForm}
            handleClose={() => {
              handleClose()
            }}
            user={initialUser}
            typeOfAction="addUser"
          />
        )}
      />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  initialUser: initialUserSelector,
})

export default connect(mapStateToProps, {
  filterByMale,
  filterByAge,
  filterByFemale,
  resetFilter
})(Header)
