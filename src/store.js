import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

import api from './reducers/apiReducer'
import bookmarks from './reducers/bookmarkReducer'
import app from './reducers/appReducer'

const middleware = applyMiddleware(promise, thunk)

export default createStore(combineReducers({api, bookmarks, app}), middleware)