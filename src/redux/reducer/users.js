import { createReducer } from '@reduxjs/toolkit'
import {
  addUser,
  editUser,
  filterByAge,
  filterByFemale,
  filterByMale,
  removeUser,
  resetFilter,
  searchUsers,
} from '../actions'
import { LOAD_USERS, REQUEST, SUCCESS, FAILURE } from '../constants'
import { findMatch } from '../../service/find-match'

export const initialUser = {
  title: '',
  name: '',
  surname: '',
  username: '',
  email: '',
  date: '',
  country: '',
  phone: '',
  login: '',
  id: '',
  gender: '',
  age: '',
  picture: '',
  password: '',
}

export const initialState = {
  loading: false,
  loaded: false,
  error: null,
  initialUser,
  entities: { results: [], filteredResults: [] },
}

export default createReducer(initialState, (builder) => {
  builder
    .addCase(LOAD_USERS + REQUEST, (state, action) => {
      state.error = null
      state.loading = true
    })
    .addCase(LOAD_USERS + SUCCESS, (state, action) => {
      state.loading = false
      state.loaded = true
      state.entities = {
        ...state.entities,
        results: [...action.payload.response],
        filteredResults: [...action.payload.response],
      }
    })
    .addCase(LOAD_USERS + FAILURE, (state, action) => {
      state.loading = false
      state.loaded = false
      state.error = action.payload.err
    })
    .addCase(removeUser, (state, action) => {
      return {
        ...state,
        entities: {
          ...state.entities,
          filteredResults: state.entities.filteredResults.filter(
            (user) => user.id !== action.payload.userId
          ),
          results: state.entities.results.filter(
            (user) => user.id !== action.payload.userId
          ),
        },
      }
    })
    .addCase(editUser, (state, action) => {
      return {
        ...state,
        entities: {
          ...state.entities,
          results: state.entities.results.map((user) => {
            if (user.id === action.payload.user.id) {
              return {
                ...action.payload.user,
                age:
                  new Date().getFullYear() -
                  new Date(Date.parse(action.payload.user.date)).getFullYear(),
                gender: action.payload.user.title === 'Mr' ? 'male' : 'female',
              }
            } else {
              return user
            }
          }),
          filteredResults: state.entities.results.map((user) => {
            if (user.id === action.payload.user.id) {
              return {
                ...action.payload.user,
                age:
                  new Date().getFullYear() -
                  new Date(Date.parse(action.payload.user.date)).getFullYear(),

                gender: action.payload.user.title === 'Mr' ? 'male' : 'female',
              }
            } else {
              return user
            }
          }),
        },
      }
    })
    .addCase(addUser, (state, action) => {
      return {
        ...state,
        entities: {
          ...state.entities,
          results: [
            ...state.entities.results,
            {
              ...action.payload.user,
              age:
                new Date().getFullYear() -
                new Date(Date.parse(action.payload.user.date)).getFullYear(),

              id: action.payload.generateId?.userId,
              gender: action.payload.user.title === 'Mr' ? 'male' : 'female',
            },
          ],
          filteredResults: [
            ...state.entities.results,
            {
              ...action.payload.user,
              age:
                new Date().getFullYear() -
                new Date(Date.parse(action.payload.user.date)).getFullYear(),
              id: action.payload.generateId?.userId,
              gender: action.payload.user.title === 'Mr' ? 'male' : 'female',
            },
          ],
        },
      }
    })
    .addCase(filterByMale, (state) => {
      state.entities.filteredResults = state.entities.results.filter(
        (user) => user.gender === 'male'
      )
    })
    .addCase(filterByFemale, (state) => {
      state.entities.filteredResults = state.entities.results.filter(
        (user) => user.gender === 'female'
      )
    })
    .addCase(filterByAge, (state) => {
      state.entities.filteredResults = state.entities.results.filter(
        (user) => user.age > 30
      )
    })
    .addCase(resetFilter, (state) => {
      state.entities.filteredResults = state.entities.results
    })
    .addCase(searchUsers, (state, action) => {
      state.entities.filteredResults = state.entities.results.filter((user) =>
        findMatch(user, action.payload.searchParam)
      )
    })
})
