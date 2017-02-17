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
      rules: this.state.houseRules
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
      <div>
        <p>House Rules</p>
        <ol className="left-align collection">
          { this.props.rules.split("\n").map((rule, index) => {
            return <li className="collection-item" key={index}>{rule}</li>
          }) }
        </ol>
        <br></br>
        <form id="rules" onSubmit={ this.submitForm.bind(this) }>
          <div className="input-field col s10">
            <textarea id="rules-input" form="rules" onChange={ this.handleChange.bind(this) } value={ this.state.houseRules } className="materialize-textarea"></textarea>
            <label htmlFor="rules-input" className="active">Rules</label>
            <input type="submit" value="Save"/>
          </div>
        </form>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    id: state.home.id,
    rules: state.home.rules.trim() || []
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateHome }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HouseRules)
