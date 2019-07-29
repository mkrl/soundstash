import { createStore, applyMiddleware, combineReducers } from 'redux'

import api from './reducers/apiReducer'
import bookmarks from './reducers/bookmarkReducer'
import app from './reducers/appReducer'

export default createStore(combineReducers({api, bookmarks, app}))