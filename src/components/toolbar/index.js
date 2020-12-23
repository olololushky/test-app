import React, { useState, useEffect } from 'react'
import Search from '../search'
import DropdownFilter from './dropdow-filter'
import ModalForm from '../modal-form'
import { connect } from 'react-redux'
import { initialUserSelector } from '../../redux/selectors'
import { createStructuredSelector } from 'reselect'
import { Route, useLocation } from 'react-router-dom'
import './style.css'
import LinkButton from './link'
import Button from '@material-ui/core/Button'

const Toolbar = ({ initialUser }) => {
  const [showModalForm, setShowModalForm] = useState(false) //индикатор открытия модальной формы добавления пользователя и обработчики
  const handleClose = () => setShowModalForm(false)
  const handleShow = () => setShowModalForm(true)

  const location = useLocation()

  useEffect(() => {
    if (location.pathname.endsWith('/add-user')) {
      handleShow() //если при загрузке страницы в браузерной строке присутсвует "add-user", происходит открытие формы добавления пользователя
    }
  })

  return (
    <div className="toolbar">
      <Search />
      <DropdownFilter />
      <Button className="button">
        <LinkButton handleShow={handleShow} />
      </Button>
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

export default connect(mapStateToProps)(Toolbar)
