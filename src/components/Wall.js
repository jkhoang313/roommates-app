import React, { Component } from 'react'
import Feed from './Feed'
import Chat from './Chat'
import Bill from './Bill'
import Calendar from './Calendar'
import HouseRules from './HouseRules'
import EditProfile from './EditProfile'
import EditHome from './EditHome'

export default class Wall extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: ""
    }
  }

  goToWall() {
    this.setState({
      currentPage: ""
    })
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

  goToHouseRules() {
    this.setState({
      currentPage: < HouseRules />
    })
  }

  editProfile() {
    this.setState({
      currentPage: < EditProfile goToWall={this.goToWall.bind(this)}/>
    })
  }

  editHome() {
    this.setState({
      currentPage: < EditHome goToWall={this.goToWall.bind(this)}/>
    })
  }


  render() {
    return (
      <div className="center">
        <button onClick={this.goToFeed.bind(this)}>Feed</button>
        <button onClick={this.goToChat.bind(this)}>Chat</button>
        <button onClick={this.goToBill.bind(this)}>Bill</button>
        <button onClick={this.goToCalendar.bind(this)}>Calendar</button>
        <button onClick={this.goToHouseRules.bind(this)}>House Rules</button>
        <button onClick={this.editProfile.bind(this)}>Edit Profile</button>
        <button onClick={this.editHome.bind(this)}>Edit Home</button>
        { this.state.currentPage }
      </div>
    )
  }
}
