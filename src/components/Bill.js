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
            [<h3 key="bill">Bills</h3>,
            < MemberBalancesList key="member-balances-list"/>,
            < TransactionsList key="transaction-list" />,
            < TransactionForm key="tranaction-form" />]}
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
