import React from 'react'
import { shallow } from 'enzyme';
import {initialUser} from '../../redux/reducer/users'
import User from './index'

describe('User', () => {
  let container
  beforeEach(() => {
    container = shallow(<User user={initialUser}/>)
  })

  it('should render', () => {
    expect(container.find('[data-id="user"]').length).toBe(1)
  })

  it('shoul have username', () => {
    expect(container.find('[data-id="user-username"]').length).toBe(1)
  })
})