import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import AppMain from './AppMain'
import AppMenu from './AppMenu'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<AppMain />, document.getElementById('main'))
ReactDOM.render(<AppMenu />, document.getElementById('menu'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister()
