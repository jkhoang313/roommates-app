import axios from 'axios'

axios.defaults.baseURL = 'https://bunkr-api.herokuapp.com/api/v1'

export default {
  fetchEvents: function(){
    return axios.get('/events').then(response => response.data)
  },
  addEvent: function(eventObj){
    return axios.post("/events", eventObj).then(data => data.data )
  }
}
