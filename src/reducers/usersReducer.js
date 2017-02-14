export default function(state={}, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {userData: action.payload.data}
    default:
      return state
  }
}
