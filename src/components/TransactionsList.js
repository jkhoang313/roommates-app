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
      <div className="col s9 z-depth-2">
        <h4 className="center-align">Transaction History</h4>
        <div style={{overflowY: "scroll", height: "400px", border: "none"}}>
          <table className="bordered">
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Amount</th>
                <th>Payer</th>
                <th>Type</th>
                <th>Receiver(s)</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
          { this.props.transactions.map((transaction) =>
              <tr key={ transaction.id } className={ transaction.payment_type.toLowerCase() }>
                <td>{ transaction.title }</td>
                <td>{ transaction.description }</td>
                <td>${ parseFloat(transaction.amount).toFixed(2) }</td>
                <td>{ transaction.user.user_name }</td>
                <td>{ transaction.payment_type }</td>
                <td>{ transaction.receiver }</td>
                <td>{ transaction.date_created }</td>
                <td>{ this.props.currentUser.id === transaction.user.id ?
  <button onClick={ this.deleteTransaction.bind(this, transaction.id )}>Delete</button> : null }</td>
              </tr>) }
            </tbody>
          </table>
        </div>
        <br></br>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    transactions: state.transactions
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchTransactions, deleteTransaction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionsList)
