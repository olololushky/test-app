import React from 'react';
import Search from './index'
import { shallow } from 'enzyme';
import {initialState} from '../../config/init-constants'
import configureStore from 'redux-mock-store'
 
describe ('Search', () => {
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState)
    wrapper = shallow(<Search store={store}/>)
  })

  it ('should render', () => {
    expect(wrapper.length).toBe(1)
  })
}) 