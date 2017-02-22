import React, { Component } from 'react'
import ChatForm from './ChatForm'
import ChatMessageList from './ChatMessageList'

export default class Chat extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s12">
          <div className="row">
            <div className="col s11 z-depth-2 center-align">
              <h3>Chat</h3>
            </div>
          </div>
          <div className="row">
            <div className="col s11 z-depth-2">
              < ChatForm />
              < ChatMessageList />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
