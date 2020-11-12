import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import reducer from './reducer';
import generateId from './middleware/generateId';

const enhancer = applyMiddleware(thunk, generateId);

export default createStore(reducer, composeWithDevTools(enhancer));
