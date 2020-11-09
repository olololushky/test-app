import produce from 'immer';
import {
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE,
  REMOVE_USER,
  EDIT_USER,
} from '../constants';

const initialState = {
  loading: false,
  loaded: false,
  error: null,
  entities: { results: [] },
};

export default produce((draft = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USERS + REQUEST: {
      draft.error = null;
      draft.loading = true;
      break;
    }
    case LOAD_USERS + SUCCESS: {
      draft.loading = false;
      draft.loaded = true;
      draft.entities = {
        ...draft.entities,
        ...action.response,
      };
      break;
    }
    case LOAD_USERS + FAILURE: {
      draft.loading = false;
      draft.loaded = false;
      draft.error = action.error;
      break;
    }
    case REMOVE_USER: {
      const x = draft.entities.results.findIndex(
        (user) => user.login.uuid === payload.userId
      );
      draft.entities.results.splice(x, 1);
      break;
    }
    case EDIT_USER: {
      const user = draft.entities.results.find(
        (user) => user.login.uuid === payload.userId
      );
      break;
    }
    default:
      return draft;
  }
});
