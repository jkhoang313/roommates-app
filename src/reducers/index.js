import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import sessionsReducer from './sessionsReducer'
import homeReducer from './homeReducer'
import billReducer from './billReducer'
import transactionReducer from './transactionReducer'
import messagesReducer from './messagesReducer'

const rootReducer = combineReducers({
  createUser: usersReducer,
  // session: sessionsReducer,
  currentUser: sessionsReducer,
  home: homeReducer,
  bill: billReducer,
  transactions: transactionReducer,
  messages: messagesReducer
})

export default rootReducer
