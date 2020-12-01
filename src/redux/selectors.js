import { createSelector } from 'reselect';

const usersSelector = (state) => state.users.entities.filteredResults;
export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;
export const usersErrorSelector = (state) => state.users.error;
export const initialUserSelector = (state) => state.users.initialUser;

export const usersListSelector = createSelector(usersSelector, Object.values);
