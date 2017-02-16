import axios from 'axios'
import usersAdapter from '../adapters/usersAdapter'

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
    type: "UPDATE_SESSION",
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
