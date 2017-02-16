export default function(state={}, action) {
  switch (action.type) {
    case "FETCH_BILL":
      return action.payload
    case "CREATE_TRANSACTION":
      return Object.assign({}, state, {total: state.total+parseInt(action.payload.amount, 10)})
    default:
      return state
  }
}
