import React from 'react'
import { CollapsibleItem } from 'react-materialize'

const ChatMessage = (props) => {
  return (
    <CollapsibleItem header={ <span><img  className="circle thumbnail" src={ props.senderPic } alt={ props.senderName }/> <span>{ props.message}</span></span> } className={ props.currentUserSent ? "right-align" : "left-align"}>
      <span><b>Sent:</b> { props.sentAt } by { props.senderName }</span>
    </CollapsibleItem>
  )
}

export default ChatMessage
