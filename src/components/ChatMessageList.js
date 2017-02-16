import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchMessages } from '../actions'
import ChatMessage from './ChatMessage'

class ChatMessageList extends Component {

  componentDidMount(){
    this.props.fetchMessages()
  }

  render(){
    const messages = this.props.messages
    return (
      <div>
        <ul>
          {messages.map(
            (message) =>
              <ChatMessage message={message.message_content} by={this.props.fullName} />)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    fullName: state.session.fullName,
    messages: state.messages
  }
}

function mapDispatchToProps(dispatch){
  return {
    fetchMessages: function(){
      let action = fetchMessages()
      dispatch( action )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessageList)
