import React from 'react'
import { shallow } from 'enzyme';
import InputSelect from './index';
import {titleOptions} from '../../../config/constants'


describe('Input Select', () => {
  let container;

  beforeEach(() => {
    container = shallow(<InputSelect options={titleOptions}/>)
  })

  it('should render', () => {
    expect(container.find('[data-id="input-select"]').length).toBe(1)
  })

  it('should render options', () => {
    expect(container.find('option').length).toBe(6)
  })
})