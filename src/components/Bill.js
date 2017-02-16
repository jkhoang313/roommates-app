import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchBill } from '../actions'
import TransactionForm from './TransactionForm'
import TransactionsList from './TransactionsList'

class Bill extends Component {
  componentDidMount() {
    this.props.fetchBill()
    // numbers aren't saved as decimals
  }

  render() {
    return (
      <div className="row">
        <p>Bill</p>
        <p>Total Bill: ${ this.props.billInfo.total }</p>
        < TransactionForm />
        < TransactionsList />
      </div>
    )
  }
}


function mapStateToProps(state) {
  return {
    billInfo: state.bill
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchBill }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Bill)
