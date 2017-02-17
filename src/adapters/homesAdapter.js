import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

export default {
  createHome: function(homeObject){
    return axios.post("/homes", homeObject).then(data => data.data)
  },
  fetchCurrentHome: function() {
    axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

    return axios.get('/home').then(data => data.data)
 },
 fetchAllHomes() {
    return axios.get('/homes').then(data => data.data)
 },
 addToHome(homeId) {
    axios.defaults.headers.common['AUTHORIZATION'] =   sessionStorage.getItem('jwt')

    return axios.patch(`/add_user/${homeId}`).then(data => data.data)
 }
}
