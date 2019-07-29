import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import store from './store'

const root = document.querySelector('#app')
ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>, root)