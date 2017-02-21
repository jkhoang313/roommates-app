import React from 'react'

const ChatMessage = (props) => {
  // make collapsible
  return (
    <li className="avatar">
      <img  className="circle thumbnail" src={ props.senderPic } alt={ props.senderName }/> { props.message } <span className="float-right">{ props.sentAt }</span>
    </li>
  )
}

export default ChatMessage
