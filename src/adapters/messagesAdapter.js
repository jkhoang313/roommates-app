import axios from 'axios'

axios.defaults.baseURL = 'https://bunkr-api.herokuapp.com/api/v1'
// axios.defaults.baseURL = 'http://localhost:3000/api/v1'

export default {
  fetchMessages: function(){
    return axios.get('/messages').then(response => response.data)
  },
  addMessage: function(messageObject){
    return axios.post("/messages", messageObject).then(data => data.data )
  }
}
