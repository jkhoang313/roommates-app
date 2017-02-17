export default function(state=[], action) {
  switch (action.type) {
    case "CREATE_TRANSACTION":
      return [...state, action.payload]
    case "FETCH_TRANSACTIONS":
      return action.payload
    case "DELETE_TRANSACTION":
      return action.payload
    case "LOG_OUT":
      return []
    default:
      return state
  }
}
