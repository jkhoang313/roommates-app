import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { fetchTransactions, deleteTransaction } from '../actions'

class TransactionsList extends Component {
  componentDidMount() {
    this.props.fetchTransactions()
  }

  deleteTransaction(id) {
    this.props.deleteTransaction(id)
  }

  render() {
    return (
      <div className="left-align col s6 offset-s2">
        <h4>Transactions</h4>
        <table className="striped">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Payer</th>
            </tr>
          </thead>
          <tbody>
        { this.props.transactions.map((transaction) =>
            <tr key={ transaction.id }>
              <td>{ transaction.title }</td>
              <td>{ transaction.description }</td>
              <td>${ parseFloat(transaction.amount).toFixed(2) }</td>
              <td>{ transaction.user.user_name }</td>
              <td><button onClick={ this.deleteTransaction.bind(this, transaction.id )}>Delete</button></td>
            </tr>) }
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
  return bindActionCreators({ fetchTransactions, deleteTransaction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList)
