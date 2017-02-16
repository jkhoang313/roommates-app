import React from 'react'

const ChatMessage = (props) => {
  return (
    <li>{props.message} by {props.by}</li>
  )
}

export default ChatMessage
