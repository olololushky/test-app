import { createSelector } from 'reselect';

const usersSelector = (state) => state.users.entities.results;
export const usersLoadingSelector = (state) => state.users.loading;
export const usersLoadedSelector = (state) => state.users.loaded;

export const usersListSelector = createSelector(usersSelector, Object.values);
