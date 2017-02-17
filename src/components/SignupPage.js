import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createUser } from '../actions/index'
import { connect } from 'react-redux'

class SignupPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      imageURL: ""
    }
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(event) {
    event.preventDefault()
    const user = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      user_name: this.state.userName,
      email: this.state.email,
      password: this.state.password,
      password_confirmation: this.state.passwordConfirmation,
      image_url: this.state.imageURL
    }
    this.props.createUser(user)
  }

  render() {
    return (
      <div>
      <h2>Signup Page</h2>
        <form onSubmit={ this.submitForm }>
          <div className="input-field">
            <input type="text" id="first_name" className="validate" value={ this.state.firstName } onChange={ (event) => this.setState({ firstName: event.target.value }) }/>
            <label htmlFor="first_name">First Name</label>
          </div>
          <div className="input-field">
            <input type="text" id="last_name" className="validate" value={ this.state.lastName } onChange={ (event) => this.setState({ lastName: event.target.value }) }/>
            <label htmlFor="last_name">Last Name</label>
          </div>
          <div className="input-field">
            <input type="text" id="user_name" className="validate" value={ this.state.userName } onChange={ (event) => this.setState({ userName: event.target.value }) }/>
            <label htmlFor="user_name">User Name</label>
          </div>
          <div className="input-field">
            <input type="text" id="email" className="validate" value={ this.state.email } onChange={ (event) => this.setState({ email: event.target.value }) }/>
            <label htmlFor="email">Email Address</label>
          </div>
          <div className="input-field">
            <input type="text" id="image-url" className="validate" value={ this.state.imageURL } onChange={ (event) => this.setState({ imageURL: event.target.value }) }/>
            <label htmlFor="image-url">Image URL</label>
          </div>
          <div className="input-field">
            <input type="password" id="password" className="validate" value={ this.state.password } onChange={ (event) => this.setState({ password: event.target.value }) }/>
            <label htmlFor="password">Password</label>
          </div>
          <div className="input-field">
            <input type="password" id="password_confirmation" className="validate" value={ this.state.passwordConfirmation } onChange={ (event) => this.setState({ passwordConfirmation: event.target.value }) }/>
            <label htmlFor="password_confirmation">Password Confirmation</label>
          </div>
          <input type="submit" className="btn"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createUser }, dispatch)
}

export default connect(null, mapDispatchToProps)(SignupPage)
