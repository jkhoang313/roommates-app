import React, { Component } from 'react'
import { Button, Row, Input } from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchAllHomes, addToHome } from '../actions'

class HomeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  componentDidMount(){
    this.props.fetchAllHomes()
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }

  submitHandler(event){
    event.preventDefault()
    this.props.addToHome(this.state.value)
  }

  render(){
    return(
      <div>
        <h3>Join an Existing Home</h3>
        <Row>
        <form onSubmit={ this.submitHandler } >
          <Input
            s={6}
            type='select'
            value={ this.state.value }
            onChange={ this.handleChange }
            >
              <option
                value=""
                disabled
                defaultValue
                >
                  Choose a home to join
                </option>
              { this.props.homes.map((home) =>
                <option
                  value={ home.id }
                  key={ home.id }>{ home.name }
                </option>
              )}
          </Input>
          <Button id="selectSubmit" type='submit'>Select</Button>
        </form>
      </Row>
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    homes: state.allHomes
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchAllHomes, addToHome }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeSelector)
