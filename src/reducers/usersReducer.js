export default function(state={}, action) {
  switch (action.type) {
    case "CREATE_USER":
    // change this
      return action.payload
    default:
      return state
  }
}
