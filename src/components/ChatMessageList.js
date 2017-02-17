import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchMessages } from '../actions'
import ChatMessage from './ChatMessage'

class ChatMessageList extends Component {
  componentDidMount(){
    this.props.fetchMessages()
  }

  render(){
    return (
      <div>
        <ul className="left-align">
          { this.props.messages.map((message) =>
            <ChatMessage
              message={ message.content }
              senderName={ message.user.user_name }
              senderPic={ message.user.image_url }
              sentAt={ message.created_at}
              key={ message.id }/>) }
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
  return bindActionCreators({ fetchMessages }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessageList)
