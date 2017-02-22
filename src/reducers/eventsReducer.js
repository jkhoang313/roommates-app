export default function(state=[], action){
  switch (action.type) {
    case 'FETCH_EVENTS':
      return action.payload
    case 'ADD_EVENT':
      return [action.payload, ...state]
    case 'LOG_OUT':
      return []
    default:
      return state
  }
}
