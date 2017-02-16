import { combineReducers } from 'redux'
import sessionsReducer from './sessionsReducer'
import homeReducer from './homeReducer'
import allHomesReducer from './allHomesReducer'
import billReducer from './billReducer'
import transactionReducer from './transactionReducer'
import messagesReducer from './messagesReducer'

const rootReducer = combineReducers({
  currentUser: sessionsReducer,
  home: homeReducer,
  allHomes: allHomesReducer,
  bill: billReducer,
  transactions: transactionReducer,
  messages: messagesReducer
})

export default rootReducer
