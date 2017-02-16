export default function(state=[], action) {
  switch (action.type) {
    case "FETCH_HOMES":
      return action.payload
    case "LOG_OUT":
      return []
    default:
      return state
  }
}
