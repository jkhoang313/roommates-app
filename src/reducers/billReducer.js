export default function(state={}, action) {
  switch (action.type) {
    case "FETCH_BILL":
      return action.payload
    case "CREATE_TRANSACTION":
      let addedTotal = parseFloat(state.total, 10)+parseFloat(action.payload.amount, 10)
      return Object.assign({}, state, {total: addedTotal})
    case "DELETE_TRANSACTION":
      let newTotal = 0
      action.payload.forEach((object) => newTotal+=parseFloat(object.amount, 10))
      return Object.assign({}, state, {total: newTotal})
    case "LOG_OUT":
      return {}
    default:
      return state
  }
}
