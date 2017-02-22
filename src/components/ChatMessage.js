import React from 'react'
import { CollapsibleItem } from 'react-materialize'

const ChatMessage = (props) => {
  var header
  if (props.currentUserSent) {
    header = <span style={{color: "#81c784"}}><span>{ props.message}</span><img className="circle thumbnail" src={ props.senderPic } alt={ props.senderName } style={{marginLeft: "5px"}}/></span>
  } else {
    header = <span><img className="circle thumbnail" src={ props.senderPic } alt={ props.senderName } style={{marginRight: "5px"}}/> <span>{ props.message}</span></span>
  }

  return (
    <CollapsibleItem header={ header } className={ props.currentUserSent ? "right-align" : "left-align"}>
      <span><b>Sent:</b> { props.sentAt } by { props.senderName } </span>
    </CollapsibleItem>
  )
}
export default ChatMessage
