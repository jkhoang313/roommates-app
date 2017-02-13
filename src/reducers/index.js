import { combineReducers } from 'redux'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
  createUser: usersReducer
})

export default rootReducer
