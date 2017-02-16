import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addMessage } from '../actions'

class ChatForm extends Component {

  constructor(){
    super()

    this.state = {
      chatter: ''
    }
  }

  handleChange(e){
    e.preventDefault()
    this.setState({
      chatter: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.addMessage( this.state.chatter )
    this.setState({chatter: ''})
  }

  render(){
    return (
      <div>
        <form
          onSubmit={this.handleSubmit.bind(this)}>
          <div className="input-field">
          <input
            type='text'
            value={this.state.chatter}
            onChange={this.handleChange.bind(this)} />
          <label htmlFor="messageField">Enter a message</label>
          </div>
        </form>
      </div>
    )
  }
}

function mapDispatchToProps( dispatch ){
  return {
    addMessage: function(note){
      let action = addMessage( note )
      dispatch( action )
    }
  }
}

export default connect( null, mapDispatchToProps)( ChatForm )
