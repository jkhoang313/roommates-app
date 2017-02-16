export default function(state=false, action) {
  // change the default?
  switch (action.type) {
    case "CREATE_USER":
      return action.payload
    case "UPDATE_SESSION":
      return action.payload
    case "FETCH_USER":
      return action.payload
    default:
      return state
  }
}
