import React from 'react';
import Users from './index'
import { shallow } from 'enzyme';
import {initialState} from '../../config/init-constants'
import configureStore from 'redux-mock-store'
 
describe ('Search', () => {
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore({users: initialState})
    wrapper = shallow(<Users store={store}/>)
  })

  it ('should render', () => {
    expect(wrapper.length).toBe(1)
  })
})