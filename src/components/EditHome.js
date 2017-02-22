import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateHome } from '../actions'

class EditHome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      address: this.props.address,
    }
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(event) {
    event.preventDefault()
    const home = {
      name: this.state.name,
      address: this.state.address,
    }
    this.props.updateHome(this.props.id, home)
    this.props.goToWall()
  }

  render() {
    return (
      <div>
        <h4>Edit Home</h4>
        <form onSubmit={ this.submitForm } className="left-align">
          <div className="input-field">
            <input
              type="text" id="home_name"
              className="validate"
              value={ this.state.name }
              onChange={ (event) => this.setState({ name: event.target.value }) }/>
            <label htmlFor="home_name" className="active">Home Name</label>
          </div>
          <div className="input-field">
            <input
              type="text" id="home_address"
              className="validate"
              value={ this.state.address }
              onChange={ (event) => this.setState({ address: event.target.value }) }/>
            <label htmlFor="home_address" className="active">Home Address</label>
          </div>
          <input type="submit" className="btn" value="Save"/>
          <button className="btn" onClick={this.props.goToWall}>Cancel</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    id: state.home.id,
    name: state.home.name,
    address: state.home.address
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateHome }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditHome)
