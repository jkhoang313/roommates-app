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
              <ChatMessage
                message={message.message_content}
                by={message.user.user_name} key={message.id}/>)}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
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
