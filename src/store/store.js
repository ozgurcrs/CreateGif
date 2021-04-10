import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {reducers} from './reducers'

const middleware = [thunk]

const store = createStore(reducers,applyMiddleware(...middleware))


export default store;