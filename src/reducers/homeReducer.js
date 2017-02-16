export default function(state={}, action) {
  switch (action.type) {
    case "FETCH_USER":
      return action.payload.home
    case "CREATE_HOME":
      return action.payload
    case "UPDATE_SESSION":
      return action.payload
    default:
      return state
  }
}
