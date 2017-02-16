import React, { Component } from 'react'
import Feed from './Feed'
import Chat from './Chat'
import Bill from './Bill'
import Calendar from './Calendar'

export default class Wall extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: ""
    }
  }

  goToFeed() {
    this.setState({
      currentPage: < Feed />
    })
  }

  goToChat() {
    this.setState({
      currentPage: < Chat />
    })
  }

  goToBill() {
    this.setState({
      currentPage: < Bill />
    })
  }

  goToCalendar() {
    this.setState({
      currentPage: < Calendar />
    })
  }

  render() {
    return (
      <div className="center">
        <button onClick={this.goToFeed.bind(this)}>Feed</button>
        <button onClick={this.goToChat.bind(this)}>Chat</button>
        <button onClick={this.goToBill.bind(this)}>Bill</button>
        <button onClick={this.goToCalendar.bind(this)}>Calendar</button>
        { this.state.currentPage }
      </div>
    )
  }
}
