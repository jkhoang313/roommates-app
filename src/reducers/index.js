import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import sessionsReducer from './sessionsReducer'

const rootReducer = combineReducers({
  createUser: usersReducer,
  session: sessionsReducer
})

export default rootReducer
