import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000/api/v1'

export default {
  fetchCurrentBill: function(){
    axios.defaults.headers.common['AUTHORIZATION'] = sessionStorage.getItem('jwt')

    return axios.get("/find_bill").then(data => data.data)
  }
}
