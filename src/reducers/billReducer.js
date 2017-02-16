export default function(state={}, action) {
  switch (action.type) {
    case "FETCH_BILL":
      return action.payload
    case "CREATE_TRANSACTION":
      var addTotal = 0.0
      action.payload.forEach((object) => addTotal+=parseFloat(object.amount, 10))
      return Object.assign({}, state, {total: addTotal.toFixed(2)})
      // make faster
    case "DELETE_TRANSACTION":
      let newTotal = 0.0
      action.payload.forEach((object) => newTotal+=parseFloat(object.amount, 10))
      return Object.assign({}, state, {total: newTotal.toFixed(2)})
    case "LOG_OUT":
      return {}
    default:
      return state
  }
}
