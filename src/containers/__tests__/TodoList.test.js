import React from 'react'
import { selectTodos } from '../../selectors/todosSelector'


describe('TodoList Container', () => {
  it('performs mapStateToProps correctly', () => {
    const state = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    }
    const expectedProps = {
      todos: [
        { id: 1, text: 'Feed cat', complete: false },
        { id: 2, text: 'Drink coffee', complete: true },
      ],
    }
    expect(selectTodos(state)).toEqual(expectedProps)
  })
})
