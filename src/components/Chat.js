import React, { Component } from 'react'
import ChatForm from './ChatForm'
import ChatMessageList from './ChatMessageList'

export default class Chat extends Component {
  render() {
    return (
      <div>
        <h3>Chat</h3>
        < ChatForm />
        < ChatMessageList />
      </div>
    )
  }
}
