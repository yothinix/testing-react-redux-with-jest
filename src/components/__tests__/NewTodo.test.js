import React from 'react'
import { shallow } from 'enzyme'
import NewTodo from '../NewTodo'

describe('NewTodo', () => {
  let component
  let props

  beforeEach(() => {
    component = shallow(<NewTodo />)
  })

  it('renders correct structure', () => {
    expect(component.is('div')).toBe(true)
    expect(component.hasClass('new-todo')).toBe(true)
    expect(component.find('input').length).toBe(1)
    expect(component.find('button').length).toBe(1)
    expect(component.find('button').hasClass('btn')).toBe(true)
    expect(component.find('button').hasClass('btn-primary')).toBe(true)
  })
})
