import axios from 'axios'

axios.defaults.baseURL = 'http://roommatez-api.herokuapp.com/api/v1'
import _ from 'lodash'

export default {
  fetchMessages: function(){
    return axios.get('/messages').then(response => response.data)
  },

  addMessage: function(messageObject){
    return axios.post("/messages", messageObject)
      .then( data => data.data )
  }
}
