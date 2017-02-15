import axios from 'axios'
import { browserHistory } from 'react-router'
import usersAdapter from '../adapters/usersAdapter'

export function createUser(userObject) {
  const response = usersAdapter.createUser(userObject)

  return {
    type: "CREATE_USER",
    payload: response
  }
}

export function logout() {
  return {
    type: "UPDATE_SESSION",
    payload: false
  }
}

export function login(userObject) {
  var response = usersAdapter.login(userObject)

  return {
    type: "UPDATE_SESSION",
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

export function fetchUser() {
  var response = usersAdapter.fetchUser()

  return {
    type: "FETCH_USER",
    payload: response
  }
}
