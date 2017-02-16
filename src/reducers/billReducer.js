export default function(state={}, action) {
  switch (action.type) {
    case "FETCH_BILL":
      return action.payload
    case "CREATE_TRANSACTION":
      var addTotal = 0
      action.payload.forEach((object) => addTotal+=parseInt(object.amount, 10))
      return Object.assign({}, state, {total: addTotal})
      // make faster
    case "DELETE_TRANSACTION":
      let newTotal = 0
      action.payload.forEach((object) => newTotal+=parseInt(object.amount, 10))
      return Object.assign({}, state, {total: newTotal})
    default:
      return state
  }
}
