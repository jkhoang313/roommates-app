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
      transactionAmount: "",
      roommatesCharged: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(event) {
    event.preventDefault()
    const transaction = {
      title: this.state.transactionTitle,
      description: this.state.transactionDescription,
      amount: this.state.transactionAmount,
      roommates_charged: this.state.roommatesCharged
    }
    this.setState({
      transactionTitle: "",
      transactionDescription: "",
      transactionAmount: "",
      roommatesCharged: []
    })
    this.props.createTransaction(transaction)
  }

  handleChange(event) {
    var newArray
    var currentArray = this.state.roommatesCharged
    if (event.target.checked) {
      newArray =  currentArray.concat(event.target.value)

    } else {
      var index = currentArray.indexOf(event.target.value)
      newArray = currentArray.slice(0, index).concat(currentArray.slice(index+1, currentArray.length))
      // this.setState({
      //   roommatesCharged: newArray
      // })
    }
    this.setState({
      roommatesCharged: newArray
    })
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
              onChange={ (event) => this.setState({ transactionDescription: event.target.value }) } />
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
          <p>Roommates Charged:</p>
          { this.props.roommates.map((roommate) => {
              return roommate.id === this.props.currentUser.id ? null : <p key={ roommate.id }>
                <input type="checkbox" id={ roommate.user_name } className="filled-in" onChange={ this.handleChange } value={ roommate.id } />
                <label htmlFor={ roommate.user_name }>{ roommate.user_name }</label>
              </p>
            })
          }
          <input type="submit" className="btn"/>
        </form>
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
