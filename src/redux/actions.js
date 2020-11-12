import serviceMethod from '../service/fetchusers';
import {
  LOAD_USERS,
  FAILURE,
  SUCCESS,
  REQUEST,
  REMOVE_USER,
  EDIT_USER,
  ADD_USER,
  FILTER_BY_GENDER_MALE,
  FILTER_BY_GENDER_FEMALE,
  FILTER_BY_AGE,
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

export const editUser = (user) => ({
  type: EDIT_USER,
  payload: { user },
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: { user },
  generateId: ['userId'],
});

export const filterByMale = () => ({
  type: FILTER_BY_GENDER_MALE,
});

export const filterByFemale = () => ({
  type: FILTER_BY_GENDER_FEMALE,
});

export const filterByAge = () => ({
  type: FILTER_BY_AGE,
});
