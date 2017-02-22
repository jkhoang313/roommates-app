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
        <div className="col s12">
          <div className="row">
              <div className="col s11 z-depth-2 center-align">
                <h3>Bills</h3>
              </div>
            </div>
        {this.props.isRendering ? <p>Loading</p> :
          [< MemberBalancesList key="member-balances-list"/>,
          <div className="row" key="transactions">
            < TransactionsList key="transaction-list" />
            < TransactionForm key="tranaction-form" />
          </div>]
        }
        </div>
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
