import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { logIn } from '../actions'

class LoginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: "",
      password: "",
    }
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(event) {
    event.preventDefault()
    const user = {
      user_name: this.state.userName,
      password: this.state.password,
    }
    this.props.logIn(user)
  }

  render() {
    return (
      <div>
      <h2>Login Page</h2>
        <form onSubmit={ this.submitForm }>
          <div className="input-field">
            <input type="text" id="user_name" className="validate" value={ this.state.userName } onChange={ (event) => this.setState({ userName: event.target.value }) }/>
            <label htmlFor="user_name">User Name</label>
          </div>
          <div className="input-field">
            <input type="password" id="password" className="validate" value={ this.state.password } onChange={ (event) => this.setState({ password: event.target.value }) }/>
            <label htmlFor="password">Password</label>
          </div>
          <input type="submit" className="btn"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logIn }, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginPage)
