export default function(state=false, action) {
  switch (action.type) {
    case "FETCH_HOME":
      return action.payload
    case "ADD_TO_HOME":
      return action.payload
    case "CREATE_HOME":
      return action.payload
    case "LEAVE_HOME":
      return false
    case "LOG_OUT":
      return action.payload
    default:
      return state
  }
}
