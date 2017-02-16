export default function(state={}, action) {
  switch (action.type) {
    case "FETCH_BILL":
      return action.payload
    case "CREATE_TRANSACTION":
      var newTotal = 0
      action.payload.forEach((object) => newTotal+=parseInt(object.amount))
      return Object.assign({}, state, {total: newTotal})
    case "DELETE_TRANSACTION":
      var newTotal = 0
      action.payload.forEach((object) => newTotal+=parseInt(object.amount))
      return Object.assign({}, state, {total: newTotal})
    default:
      return state
  }
}
