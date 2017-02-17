import React from 'react'

const ChatMessage = (props) => {
  //add time of message
  //<p className="left-align">{ props.sentAt.split("T")[1].split(".")[0] }</p>
  return (
    <li className="avatar"><img  className="circle thumbnail" src={ props.senderPic } alt={ props.senderName }/> { props.message } </li>
  )
}

export default ChatMessage
