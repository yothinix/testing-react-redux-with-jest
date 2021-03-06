import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-redux'
import { createStore } from './store'
import AppRoot from './components/AppRoot'

const store = createStore()
const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('react-root')
  )
}

render(AppRoot)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(AppRoot)
  })
}
