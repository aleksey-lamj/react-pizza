import React from 'react'

import Categories from './categories'
import {shallow} from 'enzyme'


describe('Testing <Categories />', () => {

  it('categories length', () => {

    const categories = shallow(<Categories />)

    expect(categories.find('.categories ul li')).toHaveLength(6)
  })
})