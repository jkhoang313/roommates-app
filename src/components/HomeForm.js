import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { createHome } from '../actions'
import { connect } from 'react-redux'

class HomeForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      homeName: "",
      homeAddress: "",
    }
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(event) {
    event.preventDefault()
    const home = {
      homeName: this.state.homeName,
      homeAddress: this.state.homeAddress,
    }
    this.props.createHome(home)
  }

  render() {
    return (
      <div>
      <h2>Home Form Page</h2>
        <form onSubmit={this.submitForm}>
          <div className="input-field">
            <input
              type="text" id="home_name"
              className="validate"
              value={this.state.homeName}
              onChange={(event) => this.setState({ homeName: event.target.value })}/>
            <label htmlFor="home_name">Home Name</label>
          </div>
          <div className="input-field">
            <input type="text" id="home_address" className="validate" value={this.state.homeAddress} onChange={(event) => this.setState({ homeAddress: event.target.value })}/>
            <label htmlFor="home_address">Home Address</label>
          </div>
          <input type="submit" className="btn"/>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createHome }, dispatch)
}

export default connect(null, mapDispatchToProps)(HomeForm)
