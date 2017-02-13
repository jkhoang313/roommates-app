import axios from 'axios'
import { browserHistory } from 'react-router'

export function createUser(userObject) {
  const response = axios.post("http://localhost:3000/api/v1/users", userObject).then((data) => {
    debugger
    sessionStorage.setItems("jwt", data.data.jwt)
    browserHistory.push("/homepage")
    return data
  })

  return {
    type: "CREATE_USER",
    payload: response
  }
}
