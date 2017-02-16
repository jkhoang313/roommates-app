export default function(state=[], action) {
  switch (action.type) {
    case "FETCH_HOMES":
      return action.payload
    default:
      return state
  }
}
