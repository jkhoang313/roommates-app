import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createTransaction } from '../actions'

class TransactionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      transactionTitle: "",
      transactionDescription: "",
      transactionAmount: ""
    }
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(event) {
    event.preventDefault()
    const transaction = {
      title: this.state.transactionTitle,
      description: this.state.transactionDescription,
      amount: this.state.transactionAmount
    }
    this.setState({
      transactionTitle: "",
      transactionDescription: "",
      transactionAmount: ""
    })
    this.props.createTransaction(transaction)
  }

  render() {
    return (
      <div className="left-align col s4">
        <h4>Add A Transaction</h4>
        <form onSubmit={ this.submitForm }>
          <div className="input-field">
            <input
              type="text" id="transaction_title"
              className="validate"
              value={ this.state.transactionTitle }
              onChange={ (event) => this.setState({ transactionTitle: event.target.value }) }/>
            <label htmlFor="transactionTitle">Transaction Title</label>
          </div>
          <div className="input-field">
            <input
              type="text" id="transaction_description"
              className="validate"
              value={ this.state.transactionDescription }
              onChange={ (event) => this.setState({ transactionDescription: event.target.value }) }/>
            <label htmlFor="transaction_description">Transaction Description</label>
          </div>
          <div className="input-field">
            <input
              type="number" id="transaction_amount"
              className="validate"
              value={ this.state.transactionAmount }
              min="0.01" step="0.01"
              onChange={ (event) => this.setState({ transactionAmount: event.target.value }) }/>
            <label htmlFor="transaction_amount">Transaction Amount</label>
          </div>
          <input type="submit" className="btn"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTransaction }, dispatch)
}

export default connect(null, mapDispatchToProps)(TransactionForm)
