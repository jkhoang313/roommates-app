import axios from 'axios'

axios.defaults.baseURL = 'https://bunkr-api.herokuapp.com/api/v1'

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

    return axios.patch(`/add_home/${homeId}`).then(data => data.data)
 },
 removeHome() {
   axios.defaults.headers.common['AUTHORIZATION'] =   sessionStorage.getItem('jwt')

   return axios.patch('/remove_home').then(data => data.data)
 },
 updateHome: function(homeId, homeObject){
   return axios.patch(`/homes/${homeId}`, homeObject).then(data => data.data)
 },
 kickMember: function(homeId, memberId){
   return axios.patch(`/homes/${homeId}/kick/${memberId}`).then(data => data.data)
 }
}
