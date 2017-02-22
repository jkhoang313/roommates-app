import axios from 'axios'

axios.defaults.baseURL = 'https://bunkr-api.herokuapp.com/api/v1'

export default {
  createTransaction: function(transactionObject) {
    return axios.post("/transactions", transactionObject).then(data => data.data)
  },
  fetchTransactions: function() {
    return axios.get("/transactions").then(data => data.data)
  },
  deleteTransaction(id) {
    return axios.delete(`/transactions/${id}`).then(data => data.data)
  }
}
