export default function(state={}, action) {
  switch (action.type) {
    case "CREATE_USER":
      debugger
      return { loggedIn: !!sessionStorage.jwt, userData: action.payload.data }
    default:
      return state
  }
}
