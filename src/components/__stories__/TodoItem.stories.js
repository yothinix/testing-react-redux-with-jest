import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs, text, boolean } from '@kadira/storybook-addon-knobs'
import TodoItem from '../TodoItem'

storiesOf('TodoItem', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <div style={{ textAlign: 'center' }}>
      {story()}
    </div>
  ))
  .addWithInfo('not complete', 'An incomplete todo item', () => (
    <TodoItem text={text('Text', 'Not complete')} />
  ))
  .addWithInfo('complete', 'A complete todo item', () => (
    <TodoItem
      text={text('Text', 'Complete')}
      complete={boolean('Complete', true)}
    />
  ))
