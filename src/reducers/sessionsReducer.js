export default function(state=!!sessionStorage.jwt, action) {
  switch (action.type) {
    case "CREATE_USER":
      return true
    default:
      return state
  }
}
