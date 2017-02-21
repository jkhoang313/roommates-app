import axios from 'axios'

axios.defaults.baseURL = 'http://bunkr-api.herokuapp.com/api/v1'

export default {
  fetchCurrentBill: function(){
    axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

    return axios.get("/find_bill").then(data => data.data)
  }
}
