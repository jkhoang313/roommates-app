import { combineReducers } from 'redux'
import usersReducer from './usersReducer'
import sessionsReducer from './sessionsReducer'
import billReducer from './billReducer'
import transactionReducer from './transactionReducer'

const rootReducer = combineReducers({
  createUser: usersReducer,
  session: sessionsReducer,
  bill: billReducer,
  transactions: transactionReducer
})

export default rootReducer
