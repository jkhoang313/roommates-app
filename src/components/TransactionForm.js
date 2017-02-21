import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Row, Input } from 'react-materialize'
import { createTransaction } from '../actions'

class TransactionForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      description: "",
      amount: "",
      paymentType: "Expense",
      payee: ""
    }
    this.changeSwitch = this.changeSwitch.bind(this)
    this.submitTransaction = this.submitTransaction.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  submitTransaction(event) {
    event.preventDefault()
    const transaction = {
      title: this.state.title,
      description: this.state.description,
      amount: this.state.amount,
      payment_type: this.state.paymentType
    }
    transaction.payment_type === "Payment" ? Object.assign(transaction, {receiver_id: this.state.payee}) : null
    this.setState({
      title: "",
      description: "",
      amount: "",
      payee: ""
    })
    this.props.createTransaction(transaction)
  }

  changeSwitch(event) {
    var payment_type = event.target.checked ? "Payment" : "Expense"
    this.setState({
      paymentType: payment_type,
      payee: ""
    })
  }

  handleChange(event) {
    this.setState({
      payee: event.target.value
    })
  }

  render() {
    return (
      <div className="left-align col s3 offset-s1">
        <h4>Add A Transaction</h4>
        <Row>
          <Input type='switch' value='1' offLabel="Expense" onLabel="Payment"  onChange={this.changeSwitch}/>
        </Row>
        { this.state.paymentType === "Expense" ?
          <form onSubmit={ this.submitTransaction }>
            <div className="input-field">
              <input
                type="text" id="transaction_title"
                className="validate"
                value={ this.state.title }
                onChange={ (event) => this.setState({ title: event.target.value }) }/>
              <label htmlFor="transaction_title">For</label>
            </div>
            <div className="input-field">
              <input
                type="text" id="transaction_description"
                className="validate"
                value={ this.state.description }
                onChange={ (event) => this.setState({ description: event.target.value }) } />
              <label htmlFor="transaction_description">Description</label>
            </div>
            <div className="input-field">
              <input
                type="number" id="transaction_amount"
                className="validate"
                value={ this.state.amount }
                min="0.01" step="0.01"
                onChange={ (event) => this.setState({ amount: event.target.value }) }/>
              <label htmlFor="transaction_amount">Amount</label>
            </div>
            <input type="submit" className="btn"/>
          </form>
          :
          <form onSubmit={ this.submitTransaction }>
            <div className="input-field">
              <input
                type="text" id="payment_title"
                className="validate"
                value={ this.state.title }
                onChange={ (event) => this.setState({ title: event.target.value }) }/>
              <label htmlFor="payment_title">For</label>
            </div>
            <div className="input-field">
              <input
                type="text" id="payment_description"
                className="validate"
                value={ this.state.description }
                onChange={ (event) => this.setState({ description: event.target.value }) } />
              <label htmlFor="payment_description">Description</label>
            </div>
            <div className="input-field">
              <input
                type="number" id="payment_amount"
                className="validate"
                value={ this.state.amount }
                min="0.01" step="0.01"
                onChange={ (event) => this.setState({ amount: event.target.value }) }/>
              <label htmlFor="payment_amount">Amount</label>
            </div>
            <p>Payment To:</p>
            { this.props.roommates.map((roommate) => {
              return roommate.id === this.props.currentUser.id ? null : <p key={ roommate.id }>
                <input type="radio" name="payee" id={ roommate.user_name } className="with-gap" onChange={ this.handleChange } value={ roommate.id } checked={ this.state.payee === (roommate.id).toString() }/>
                  <label htmlFor={ roommate.user_name }>{ roommate.user_name }</label>
              </p>
              })
            }
            <input type="submit" className="btn"/>
          </form>
          }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    roommates: state.bill.users || []
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTransaction }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TransactionForm)
