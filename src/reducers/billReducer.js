export default function(state={}, action) {
  switch (action.type) {
    case "FETCH_BILL":
      return action.payload
    case "CREATE_TRANSACTION":
      return action.payload.bill
    case "DELETE_TRANSACTION":
      return action.payload[0].bill
    case "UPDATE_HOME":
      return action.payload.bill
    case "LOG_OUT":
      return {}
    default:
      return state
  }
}
