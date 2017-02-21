import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchBill } from '../actions'
import MemberBalancesList from './MemberBalancesList'
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
            <p key="total">Amount Spent: ${ parseFloat(this.props.billInfo.total, 10).toFixed(2) }</p>,
            < MemberBalancesList key="member-balances-list"/>,
            < TransactionForm key="tranaction-form" />,
            < TransactionsList key="transaction-list" />]}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isRendering: !state.bill.id,
    billInfo: state.bill,
    users: state.bill.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBill }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Bill)
