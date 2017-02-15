import axios from 'axios'
import { browserHistory } from 'react-router'

axios.defaults.baseURL = 'http://localhost:3000/api/v1/'
axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

export function createUser(userObject) {
  const response = axios.post('/users', userObject).then((data) => {
    sessionStorage.setItem("jwt", data.data.jwt)
    browserHistory.push("/homepage")
    return data.data
    // have to account for failures
  })

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
  var response = axios.post("/users/login", userObject).then((data) => {
    if (!!data.data.jwt) {
      sessionStorage.setItem("jwt", data.data.jwt)
      browserHistory.push("/homepage")
    }
    return data.data
 })

  return {
    type: "UPDATE_SESSION",
    payload: response
  }
}

export function createHome(homeObject) {
  var response = axios.post("/homes", homeObject).then((data) => {

    // if (!!data.data.jwt) {
    //   sessionStorage.setItem("jwt", data.data.jwt)
    //   browserHistory.push("/homepage")
    // }
    return data
 })

  return {
    type: "",
    payload: response
  }
}

export function fetchUser() {
  var response = axios.post("/users/current_user").then((data) => {
    return data.data
 })

  return {
    type: "FETCH_USER",
    payload: response
  }
}
