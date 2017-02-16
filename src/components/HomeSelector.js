import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchHomes, addToHome } from '../actions'

class HomeSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    this.props.fetchHomes()
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  submitHandler(e){
    e.preventDefault()
    console.log(this.state)
    this.props.addToHome(this.state.value)
  }
  render(){
    return(
      <div>
        <h1>hello</h1>
        <form onSubmit={this.submitHandler.bind(this)} >
          <div className='input-field'>
        <select value={this.state.value} onChange={this.handleChange} className='browser-default'>
          <option value="" disabled selected>Choose your option</option>
          {this.props.homes.map((home) => <option value={home.id}>{home.name}</option>)}
        </select>
        <button type='submit'>Join Home</button>
      </div>
      </form>
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
  return bindActionCreators({ fetchHomes, addToHome }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeSelector)
