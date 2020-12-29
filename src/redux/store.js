import reducer from './reducer';
import generateId from './middleware/generateId';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';
const epicMiddleware = createEpicMiddleware();

const store = configureStore({
  reducer:  reducer,
  middleware: [thunk, generateId,  epicMiddleware],
 });

 epicMiddleware.run(rootEpic);

 export default store
