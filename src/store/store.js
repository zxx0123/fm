import {createStore,applyMiddleware} from 'redux'

import countReducer from './reducer/reducer'

import thunk from 'redux-thunk'

var store = createStore(countReducer,applyMiddleware(thunk))

export default store