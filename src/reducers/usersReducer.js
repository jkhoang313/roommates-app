export default function(state={}, action) {
  switch (action.type) {
    case "CREATE_USER":
      debugger
      return action.payload.data
    default:
      return state
  }
}
