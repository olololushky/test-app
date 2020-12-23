import reducer from './reducer';
import generateId from './middleware/generateId';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

export default configureStore({
  reducer:  reducer,
  middleware: [generateId, thunk],
 });