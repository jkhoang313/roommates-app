export default function(state={}, action) {
  switch (action.type) {
    case "CREATE_USER":
    // change this
      return {userData: action.payload.data}
    default:
      return state
  }
}
