export default function(state=false, action) {
  switch (action.type) {
    case "FETCH_HOME":
      return action.payload
    case "ADD_TO_HOME":
      return action.payload
    case "CREATE_HOME":
      return action.payload
    case "UPDATE_SESSION":
      return action.payload
    case "LOG_OUT":
      return false
    default:
      return state
  }
}
