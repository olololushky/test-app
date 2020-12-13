import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { loadUsers } from '../../redux/actions'
import {
  usersListSelector,
  usersLoadedSelector,
  usersLoadingSelector,
} from '../../redux/selectors'
import { createStructuredSelector } from 'reselect'
import User from '../user'
import PropTypes from 'prop-types'
import './style.css'
import { Route, Switch, Redirect } from 'react-router-dom'
import ModalForm from '../modal-form'

const Users = ({ users, loading, loaded, loadUsers }) => {
  useEffect(() => {
    if (!loading && !loaded) {
      loadUsers() //если в данный момент нет загруженных данных пользователей и не происходит загрузка, тогда система начинает грузить юзеров
    }
  })
  const [showModalForm, setShowModalForm] = useState(false) //индикатор открытия модальной формы редактирования юзера и обработчики
  const handleClose = () => setShowModalForm(false)
  const handleShow = () => setShowModalForm(true)
  return (
    <div className="card-deck container-fluid card-container">
      {loading && (
        <div className="d-flex justify-content-center">
          <div className="spinner-border spinner" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {users &&
        users.map((user) => (
          <User user={user} key={user.id} handleShow={handleShow} />
        ))}
      {/* отрисовка корточек пользователей */}
      {!loading && loaded && !users.length ? <h3>Нет совпадений</h3> : ''}
      {/* при отстутвии пользователей соотсветусющих критериям поиска отображается информуция об отсутствии совпадений */}
      <Switch>
        {users.map((user) => (
          <Route 
          // роуты для юзеров при налии id в URL
            key={user.id}
            path={`/users/${user.id}`}
            render={() => (
              <ModalForm
                show={showModalForm}
                handleClose={handleClose}
                user={user}
                typeOfAction="editUser"
              />
            )}
          />
        ))}
        <Route path="/users/add-user" />
        <Redirect to="/users" /> 
        {/* если совпадений не найдено - происходит редирект на страницу /users */}
      </Switch>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  users: usersListSelector,
  loading: usersLoadingSelector,
  loaded: usersLoadedSelector,
})

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({

        id: PropTypes.string.isRequired,

    }).isRequired
  ),
}

export default connect(mapStateToProps, { loadUsers })(Users)
