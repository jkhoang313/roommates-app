import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import sessionsReducer from './sessionsReducer'
import messagesReducer from './messagesReducer'

const rootReducer = combineReducers({
  createUser: usersReducer,
  session: sessionsReducer,
  messages: messagesReducer
})

export default rootReducer
