import React, { Component } from 'react'
import ChatForm from './ChatForm'
import ChatMessageList from './ChatMessageList'

export default class Chat extends Component {
  render() {
    return (
      <div>
        <p>Chat</p>
        < ChatForm />
        < ChatMessageList />
      </div>
    )
  }
}
