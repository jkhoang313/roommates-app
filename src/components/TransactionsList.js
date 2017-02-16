import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchTransactions } from '../actions'

class TransactionsList extends Component {
  componentDidMount() {
    this.props.fetchTransactions()
  }

  render() {
    return (
      <div className="left-align">
        <h4>Transactions</h4>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
        { this.props.transactions.map((transaction, index) =>
            <tr key={index}>
             <td>{transaction.title}</td> <td>{transaction.description}</td> <td>${transaction.amount}</td>
            </tr>
         )}
          </tbody>
        </table>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    transactions: state.transactions
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTransactions }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList)
