export default function(state=false, action) {
  switch (action.type) {
    case "CREATE_USER":
      return action.payload
    case "LOG_IN":
      return action.payload.user
    case "LOG_OUT":
      return false
    case "FETCH_USER":
      return action.payload
    case "UPDATE_USER_PROFILE":
      return action.payload
    default:
      return state
  }
}
