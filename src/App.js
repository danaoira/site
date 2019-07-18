import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import combinedReducer from './store/combinedReducer'
import combinedEpics from './store/combinedEpics'
import { Main, Menu } from './pages/App'
import { uiSelectPage } from './store/ui/actions'

const epicMiddleware = createEpicMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
let store = createStore(
  combinedReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleware)
  )
)
epicMiddleware.run(combinedEpics)

class App extends Component {
  componentWillMount() {
    store.dispatch(uiSelectPage('portfolio'))
  }

  render() {
    return (
      <Provider store={store}>
        <Menu />
        <Main />
      </Provider>
    )
  }
}

export default App
