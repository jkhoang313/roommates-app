import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'
import { browserHistory } from 'react-router'
import _ from 'lodash'

export default {
 createUser: function(userObject) {
   return axios.post('/users', userObject).then((data) => {
     sessionStorage.setItem("jwt", data.data.jwt)
     browserHistory.push("/homepage")
     return data.data
   // have to account for failures
    })
  },
 login: function(userObject) {
   return axios.post("/users/login", userObject).then((data) => {
     if (!!data.data.jwt) {
         sessionStorage.setItem("jwt", data.data.jwt)
         browserHistory.push("/homepage")
     }
     return data.data
    })
  },
  fetchUser: function(){
    axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')
    return axios.get("/users/current_user").then((data) => {
      return data.data
   })
  },
  createHome: function(homeObject){
    return axios.post("/homes", homeObject).then((data) => {
      return data.data
   })
  }
}
