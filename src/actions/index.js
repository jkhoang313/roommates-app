import axios from 'axios'
import usersAdapter from '../adapters/usersAdapter'
import messagesAdapter from '../adapters/messagesAdapter'

export function createUser(userObject) {
  const response = usersAdapter.createUser(userObject)

  return {
    type: "CREATE_USER",
    payload: response
  }
}

export function login(userObject) {
  var response = usersAdapter.login(userObject)

  return {
    type: "UPDATE_SESSION",
    payload: response
  }
}

export function logout() {
  return {
    type: "LOG_OUT",
    payload: false
  }
}

export function fetchUser() {
  var response = usersAdapter.fetchUser()

  return {
    type: "FETCH_USER",
    payload: response
  }
}

export function createHome(homeObject) {
  var response = usersAdapter.createHome(homeObject)

  return {
    type: "CREATE_HOME",
    payload: response
  }
}

export function fetchHome() {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

  var response = axios.get('/home').then((data) => {
    return data.data
 })

  return {
    type: "FETCH_HOME",
    payload: response
  }
}
 export function fetchHomes(){
   var response = axios.get('/homes').then((data) => {
     return data.data
   })

   return {
     type: "FETCH_HOMES",
     payload: response
   }
 }

export function addToHome(homeID){
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

  var response = axios.patch(`/homes/${homeID}`).then((data) => {
    return data.data
  })

  return {
    type: "ADD_TO_HOME",
    payload: response
  }
}

export function fetchBill() {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

  var response = axios.get("/find_bill").then((data) => data.data)

  return {
    type: "FETCH_BILL",
    payload: response
  }
}

export function createTransaction(transactionObject) {
  const response = axios.post("/transactions", transactionObject).then((data) => data.data)

  return {
    type: "CREATE_TRANSACTION",
    payload: response
  }
}

export function fetchTransactions() {
  const response = axios.get("/transactions").then((data) => data.data)

  return {
    type: "FETCH_TRANSACTIONS",
    payload: response
  }
}

export function deleteTransaction(id) {
  const response = axios.delete(`/transactions/${id}`).then((data) => data.data)

  return {
    type: "DELETE_TRANSACTION",
    payload: response
  }
}

export function fetchMessages(){
  axios.defaults.baseURL = 'http://localhost:3000/api/v1'
  // axios.defaults.baseURL = 'http://roommatez-api.herokuapp.com/api/v1'
  const messages = messagesAdapter.fetchMessages()

  return {
    type: 'FETCH_MESSAGES',
    payload: messages
  }
}

export function addMessage(message){
  const newMessage = messagesAdapter.addMessage({message_content: message})
  return {
    type: 'ADD_MESSAGE',
    payload: newMessage
  }
}
