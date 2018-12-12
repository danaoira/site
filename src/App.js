import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import combinedReducer from './store/combinedReducer'
import combinedEpics from './store/combinedEpics'
import AppContainer from './containers/AppContainer'
import AppMain from './AppMain'
import AppMenu from './AppMenu'
import { uiSelectPage } from './store/ui/actions'

const ConnectedAppMenu = AppContainer(AppMenu)
const ConnectedAppMain = AppContainer(AppMain)

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
        <ConnectedAppMenu />
        <ConnectedAppMain />
      </Provider>
    )
  }
}

export default App