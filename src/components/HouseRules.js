import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateHome } from '../actions'

class HouseRules extends Component {
  constructor(props) {
    super(props)
    this.state = {
      houseRules: this.props.rules
    }
  }

  submitForm(event) {
    event.preventDefault()
    const home = {
      rules: this.state.houseRules.trim()
    }
    this.setState({
      houseRules: this.state.houseRules
    })
    this.props.updateHome(this.props.id, home)
  }

  handleChange(event) {
    this.setState({
      houseRules: event.target.value
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="col s11 z-depth-2 center-align">
              <h3>House Rules</h3>
            </div>
          </div>
          <div className="row">
            <div className="col s11 z-depth-2">
              <ol className="left-align collection">
                { this.props.rules.split("\n").map((rule, index) => <li className="collection-item" key={index}>{rule}</li> )}
              </ol>
            </div>
          </div>
          <div className="row">
            <div className="col s11 z-depth-2">
              <form id="rules" onSubmit={ this.submitForm.bind(this) }>
                <div className="input-field col s10">
                  <textarea id="rules-input" form="rules" onChange={ this.handleChange.bind(this) } value={ this.state.houseRules } className="materialize-textarea"></textarea>
                  <label htmlFor="rules-input" className="active">Rules</label>
                  <input type="submit" value="Save" style={{marginBottom: "10px"}} className="btn"/>
                  <br></br>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    id: state.home.id,
    rules: state.home.rules || ""
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateHome }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseRules)
