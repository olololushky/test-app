import { createAction } from '@reduxjs/toolkit'

export const filterByMale = createAction('FILTER_BY_GENDER_MALE')

export const filterByFemale = createAction('FILTER_BY_GENDER_FEMALE')

export const filterByAge = createAction('FILTER_BY_AGE')

export const resetFilter = createAction('RESET_FILTER')

export const searchUsers = createAction('SEARCH_USERS', (searchParam) => ({
  payload: { searchParam },
}))

export const addUser = createAction('ADD_USER', (user) => ({
  payload: { user: { ...user }, generateId: ['userId'] },
}))

export const editUser = createAction('EDIT_USER', (user) => ({
  payload: { user },
}))

export const removeUser = createAction('REMOVE_USER', (userId) => ({
  payload: { userId },
}))

export const loadUsers = createAction('LOAD_USERS_REQUEST')

export const loadUsersSuccess = createAction('LOAD_USERS_SUCCESS', (response) => ({
  payload: {response}
}))

export const loadUsersError = createAction('LOAD_USERS_FAILURE', (err) => ({
  payload: {err}
}))
