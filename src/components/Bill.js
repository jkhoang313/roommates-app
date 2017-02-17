import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchBill } from '../actions'
import TransactionForm from './TransactionForm'
import TransactionsList from './TransactionsList'

class Bill extends Component {
  componentDidMount() {
    this.props.fetchBill()
  }

  render() {
    return (
      <div className="row">
        {this.props.isRendering ? <p>Loading</p> :
            [<p key="bill">Bill</p>,
            <p key="total">Total Bill: ${ parseFloat(this.props.billInfo.total, 10).toFixed(2) }</p>,
            <p key="split">Each person owes: ${ (this.props.billInfo.total/this.props.billInfo.users.length).toFixed(2) }</p>,
            < TransactionForm key="tranaction-form"/>,
            < TransactionsList key="transaction-list"/>]}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isRendering: !state.bill.id,
    billInfo: state.bill
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBill }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Bill)
