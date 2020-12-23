import serviceMethod from '../service/fetch-users';
import {
  LOAD_USERS,
  FAILURE,
  SUCCESS,
  REQUEST,
} from './constants'
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

export const loadUsers = (params) => async (dispatch, getState) => {
  dispatch({ type: LOAD_USERS + REQUEST })
  try {
    const response = await serviceMethod(params)
    setTimeout(dispatch, 1000, { type: LOAD_USERS + SUCCESS, response })
  } catch (err) {
    dispatch({ type: LOAD_USERS + FAILURE, err })
  }
}
