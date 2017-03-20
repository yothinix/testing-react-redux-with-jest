import React from 'react'
import { shallow } from 'enzyme'
import TodoItem from '../TodoItem'

describe('TodoItem', () => {
  let component

  beforeEach(() => {
    component = shallow(<TodoItem text="Drink Coffee" />)
  })

  it('matches its snapshot - not complete', () => {
    expect(component).toMatchSnapshot()
  })

  it('matches its snapshot - complete', () => {
    component.setProps({ complete: true })
    expect(component).toMatchSnapshot()
  })

  it('renders correct structure', () => {
    expect(component.is('li')).toBe(true)
    expect(component.text()).toBe('Drink Coffee')
  })

  it('has complete class if receiving complete prop', () => {
    component.setProps({ complete: true })
    expect(component.hasClass('complete')).toBe(true)
  })
})
