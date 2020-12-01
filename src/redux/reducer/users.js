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
} from '../constants'

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  initialUser: {
    cell: '',
    dob: {
      age: null,
      date: '',
    },
    email: '',
    gender: '',
    id: {
      name: '',
      value: '',
    },
    location: {
      city: '',
      coordinates: { latitude: '', longitude: '' },
      country: '',
      postcode: null,
      state: '',
      street: { number: null, name: '' },
      timezone: { offset: '', description: '' },
    },
    login: {
      md5: '',
      password: '',
      salt: '',
      sha1: '',
      sha256: '',
      username: '',
      uuid: '',
    },
    name: {
      first: '',
      last: '',
      title: '',
    },
    nat: '',
    phone: '',
    picture: {
      large: '',
      medium: '',
      thumbnail: '',
    },
    registered: {
      age: null,
      date: '',
    },
  },
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
        ...action.response,
        filteredResults: [...action.response.results],
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
            (user) => user.login.uuid !== payload.userId
          ),
        },
      }
    }
    case EDIT_USER: {
      const index = draft.entities.filteredResults.findIndex(
        (user) => user.login.uuid === payload.user.login.uuid
      )

      draft.entities.filteredResults[index] = {
        ...payload.user,
        dob: {
          ...payload.user.dob,
          age:
            new Date().getFullYear() -
            new Date(Date.parse(payload.user.dob.date)).getFullYear(),
        },
        gender: payload.user.name.title === 'Mr' ? 'male' : 'female',
      }

      break
    }
    case ADD_USER:
      return {
        ...draft,
        entities: {
          ...draft.entities,
          filteredResults: [
            ...draft.entities.filteredResults,
            {
              ...payload.user,
              dob: {
                ...payload.user.dob,
                age:
                  new Date().getFullYear() -
                  new Date(Date.parse(payload.user.dob.date)).getFullYear(),
              },
              login: { ...payload.user.login, uuid: userId },
              gender: payload.user.name.title === 'Mr' ? 'male' : 'female',
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
        (user) => user.dob.age > 30
      )
      break
    }
    default:
      return draft
  }
})
