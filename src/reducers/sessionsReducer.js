export default function(state=!!sessionStorage.jwt, action) {
  // change the default?
  switch (action.type) {
    case "CREATE_USER":
      return action.payload
    case "UPDATE_SESSION":
      return action.payload
    case "FETCH_USER":
      return action.payload
    case "CREATE_HOME":
      return action.payload
    default:
      return state
  }
}
