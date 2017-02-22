import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { addMessage } from '../actions'

class ChatForm extends Component {

  constructor(){
    super()
    this.state = {
      chatter: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    event.preventDefault()
    this.setState({
      chatter: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    this.props.addMessage( {content: this.state.chatter} )
    this.setState({chatter: ''})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="input-field">
        <input
          type='text'
          id='message-field'
          value={this.state.chatter}
          onChange={this.handleChange} />
        <label htmlFor="message-field">Enter a message</label>
        </div>
      </form>
    )
  }
}

function mapDispatchToProps( dispatch ){
  return bindActionCreators({ addMessage }, dispatch)
}

export default connect(null, mapDispatchToProps)( ChatForm )
