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

        { !!this.props.billInfo.total ?
            [<p>Bill</p>,
            <p>Total Bill: ${ this.props.billInfo.total }</p>,
            <p>Each person owes: ${ (this.props.billInfo.total/this.props.billInfo.users.length).toFixed(2) }</p>,
            < TransactionForm />,
            < TransactionsList /> ] : <p>Loading</p>
        }
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
