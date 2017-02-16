import React from 'react'

const ChatMessage = (props) => {
  return (
    <li className="avatar"><img  className="circle thumbnail" src={props.by}/> {props.message}</li>
  )
}

export default ChatMessage
