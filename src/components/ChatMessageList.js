import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchMessages } from '../actions'
import ChatMessage from './ChatMessage'
import { Collapsible } from 'react-materialize'

class ChatMessageList extends Component {
  // make it scrollable?
  componentDidMount(){
    this.props.fetchMessages()
  }

  render(){
    return (
      <div className="left-align">
        <Collapsible>
          { this.props.messages.map((message) =>
            <ChatMessage
              message={ message.content }
              currentUserSent={ message.user.id === this.props.currentUser.id }
              senderName={ message.user.user_name }
              senderPic={ message.user.image_url }
              sentAt={ message.sent_at}
              key={ message.id }/>) }
          </Collapsible>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    messages: state.messages
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchMessages }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ChatMessageList)
