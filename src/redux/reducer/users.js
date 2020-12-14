import produce from 'immer'
import {
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE,
  REMOVE_USER,
  EDIT_USER,
  ADD_USER,
  FILTER_BY_GENDER_MALE,
  FILTER_BY_GENDER_FEMALE,
  FILTER_BY_AGE,
  SEARCH_USERS,
  RESET_FILTER,
} from '../constants'
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

export default produce((draft = initialState, action) => {
  const { type, payload, userId } = action

  switch (type) {
    case LOAD_USERS + REQUEST: {
      draft.error = null
      draft.loading = true
      break
    }
    case LOAD_USERS + SUCCESS: {
      draft.loading = false
      draft.loaded = true
      draft.entities = {
        ...draft.entities,
        results: [...action.response],
        filteredResults: [...action.response],
      }
      break
    }
    case LOAD_USERS + FAILURE: {
      draft.loading = false
      draft.loaded = false
      draft.error = action.err
      break
    }
    case REMOVE_USER: {
      return {
        ...draft,
        entities: {
          ...draft.entities,
          filteredResults: draft.entities.filteredResults.filter(
            (user) => user.id !== payload.userId
          ),
          results: draft.entities.results.filter(
            (user) => user.id !== payload.userId
          ),
        },
      }
    }
    case EDIT_USER:
      return {
        ...draft,
        entities: {
          ...draft.entities,
          results: draft.entities.results.map((user) => {
            if (user.id === payload.user.id) {
              return {
                ...payload.user,
                age:
                  new Date().getFullYear() -
                  new Date(Date.parse(payload.user.date)).getFullYear(),
                gender: payload.user.title === 'Mr' ? 'male' : 'female',
              }
            } else {
              return user
            }
          }),
          filteredResults: draft.entities.results.map((user) => {
            if (user.id === payload.user.id) {
              return {
                ...payload.user,
                age:
                  new Date().getFullYear() -
                  new Date(Date.parse(payload.user.date)).getFullYear(),

                gender: payload.user.title === 'Mr' ? 'male' : 'female',
              }
            } else {
              return user
            }
          }),
        },
      }
    case ADD_USER:
      return {
        ...draft,
        entities: {
          ...draft.entities,
          results: [
            ...draft.entities.results,
            {
              ...payload.user,
              age:
                new Date().getFullYear() -
                new Date(Date.parse(payload.user.date)).getFullYear(),

              id: userId,
              gender: payload.user.title === 'Mr' ? 'male' : 'female',
            },
          ],
          filteredResults: [
            ...draft.entities.results,
            {
              ...payload.user,
              age:
                new Date().getFullYear() -
                new Date(Date.parse(payload.user.date)).getFullYear(),
              id: userId,
              gender: payload.user.title === 'Mr' ? 'male' : 'female',
            },
          ],
        },
      }
    case FILTER_BY_GENDER_MALE: {
      draft.entities.filteredResults = draft.entities.results.filter(
        (user) => user.gender === 'male'
      )
      break
    }
    case FILTER_BY_GENDER_FEMALE: {
      draft.entities.filteredResults = draft.entities.results.filter(
        (user) => user.gender === 'female'
      )
      break
    }
    case FILTER_BY_AGE: {
      draft.entities.filteredResults = draft.entities.results.filter(
        (user) => user.age > 30
      )
      break
    }
    case RESET_FILTER: {
      draft.entities.filteredResults = draft.entities.results
      break
    }

    case SEARCH_USERS: {
      draft.entities.filteredResults = draft.entities.results.filter((user) =>
        findMatch(user, payload.searchParam)
      )

      break
    }
    default:
      return draft
  }
})
