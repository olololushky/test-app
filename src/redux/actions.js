import serviceMethod from '../service/fetchusers';
import {
  LOAD_USERS,
  FAILURE,
  SUCCESS,
  REQUEST,
  REMOVE_USER,
  EDIT_USER,
} from './constants';

export const loadUsers = (params) => async (dispatch, getState) => {
  dispatch({ type: LOAD_USERS + REQUEST });
  try {
    const response = await serviceMethod(params);
    setTimeout(dispatch, 1000, { type: LOAD_USERS + SUCCESS, response });
    //dispatch({ type: LOAD_USERS + SUCCESS, response });
  } catch (err) {
    dispatch({ type: LOAD_USERS + FAILURE, err });
  }
};

export const removeUser = (userId) => ({
  type: REMOVE_USER,
  payload: { userId },
});

export const editUser = (userData) => ({
  type: EDIT_USER,
  payload: { userData },
});
