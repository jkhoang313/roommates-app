import axios from 'axios'
import usersAdapter from '../adapters/usersAdapter'
import homesAdapter from '../adapters/homesAdapter'
import billsAdapter from '../adapters/billsAdapter'
import transactionsAdapter from '../adapters/transactionsAdapter'
import messagesAdapter from '../adapters/messagesAdapter'
import eventsAdapter from '../adapters/eventsAdapter'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

export function createUser(userObject) {
  var response = usersAdapter.createUser(userObject)

  return {
    type: "CREATE_USER",
    payload: response
  }
}

export function logIn(userObject) {
  var response = usersAdapter.logIn(userObject)

  return {
    type: "LOG_IN",
    payload: response
  }
}

export function logOut() {
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

export function updateUserProfile(userObject) {
  var response = usersAdapter.updateUserProfile(userObject)

  return {
    type: "UPDATE_USER_PROFILE",
    payload: response
  }
}

export function createHome(homeObject) {
  var response = homesAdapter.createHome(homeObject)

  return {
    type: "CREATE_HOME",
    payload: response
  }
}

export function fetchCurrentHome() {
  axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

  var response = homesAdapter.fetchCurrentHome()

  return {
    type: "FETCH_HOME",
    payload: response
  }
}
 export function fetchAllHomes(){
   var response = homesAdapter.fetchAllHomes()

   return {
     type: "FETCH_HOMES",
     payload: response
   }
 }

export function addToHome(homeId){
  var response = homesAdapter.addToHome(homeId)

  return {
    type: "ADD_TO_HOME",
    payload: response
  }
}

export function removeHome() {
  var response = homesAdapter.removeHome()

  return {
    type: "REMOVE_HOME",
    payload: response
  }
}

export function updateHome(homeId, homeObject) {
  var response = homesAdapter.updateHome(homeId, homeObject)

  return {
    type: "UPDATE_HOME",
    payload: response
  }
}

export function fetchBill() {
  var response = billsAdapter.fetchCurrentBill()

  return {
    type: "FETCH_BILL",
    payload: response
  }
}

export function createTransaction(transactionObject) {
  var response = transactionsAdapter.createTransaction(transactionObject)

  return {
    type: "CREATE_TRANSACTION",
    payload: response
  }
}

export function fetchTransactions() {
  var response = transactionsAdapter.fetchTransactions()

  return {
    type: "FETCH_TRANSACTIONS",
    payload: response
  }
}

export function deleteTransaction(id) {
  var response = transactionsAdapter.deleteTransaction(id)

  return {
    type: "DELETE_TRANSACTION",
    payload: response
  }
}

export function fetchMessages(){
  var messages = messagesAdapter.fetchMessages()

  return {
    type: 'FETCH_MESSAGES',
    payload: messages
  }
}

export function addMessage(message){
  var newMessage = messagesAdapter.addMessage(message)
  return {
    type: 'ADD_MESSAGE',
    payload: newMessage
  }
}

export function addEvent(eventObj){
  var newEvent = eventsAdapter.addEvent(eventObj)
  return {
    type: 'ADD_EVENT',
    payload: newEvent
  }
}

export function fetchEvents(){
  var events = eventsAdapter.fetchEvents()

  return {
    type: 'FETCH_EVENTS',
    payload: events
  }
}
