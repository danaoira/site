import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import combinedReducer from './store/combinedReducer'
import AppContainer from './containers/AppContainer'
import AppMain from './AppMain'
import AppMenu from './AppMenu'

const ConnectedAppMenu = AppContainer(AppMenu)
const ConnectedAppMain = AppContainer(AppMain)

const epicMiddleWare = createEpicMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
  combinedReducer,
  composeEnhancers(
    applyMiddleware(epicMiddleWare)
  )
)

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Provider store={store}>
        <ConnectedAppMenu />
        <ConnectedAppMain />
      </Provider>
    )
  }
}

export default App
