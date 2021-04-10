import {combineReducers} from 'redux'
import {userReducer} from './userAccount/userReducer'

export const reducers = combineReducers({users:userReducer});