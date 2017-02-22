import React from 'react'
import { CollapsibleItem } from 'react-materialize'

const ChatMessage = (props) => {
  var header
  if (props.currentUserSent) {
    header = <span><span>{ props.message}</span><img className="circle thumbnail" src={ props.senderPic } alt={ props.senderName }/></span>
  } else {
    header = <span><img className="circle thumbnail" src={ props.senderPic } alt={ props.senderName }/> <span>{ props.message}</span></span>
  }

  return (
    <CollapsibleItem header={ header } className={ props.currentUserSent ? "right-align" : "left-align"}>
      <span><b>Sent:</b> { props.sentAt } by { props.senderName } </span>
    </CollapsibleItem>
  )
}

export default ChatMessage


// <CollapsibleItem header={ <span><img  className="circle thumbnail" src={ props.senderPic } alt={ props.senderName }/> <span>{ props.message}</span></span> } className={ props.currentUserSent ? "right-align" : "left-align"}>
//   <span><b>Sent:</b> { props.sentAt } by { props.senderName } </span>
// </CollapsibleItem>
