import axios from 'axios'
import { browserHistory } from 'react-router'

export function createUser(userObject) {
  const response = axios.post("http://localhost:3000/api/v1/users", userObject).then((data) => {
    sessionStorage.setItem("jwt", data.data.jwt)
    browserHistory.push("/homepage")
    return data.data
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
  var response = axios.post("http://localhost:3000/api/v1/users/login", userObject).then((data) => {
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
  debugger
  var response = axios.post("http://localhost:3000/api/v1/homes/new", homeObject).then((data) => {

    // if (!!data.data.jwt) {
    //   sessionStorage.setItem("jwt", data.data.jwt)
    //   browserHistory.push("/homepage")
    // }
    // return data.data
 })

  return {
    type: "UPDATE_SESSION",
    payload: response
  }
}

export function fetchUser(jwt) {
  var response = axios.post("http://localhost:3000/api/v1/users/current_user", {jwt_token: jwt}).then((data) => {
    return data.data
 })

  return {
    type: "FETCH_USER",
    payload: response
  }
}
