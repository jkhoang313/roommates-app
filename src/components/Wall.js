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

  goToFeed(e) {
    e.preventDefault()
    this.setState({
      currentPage: < Feed />
    })
  }


  goToChat(e) {
    e.preventDefault()
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
      <div className="center tabs-list">
        {/* <div className="row">
          <div className="col s12">
            <ul className="tabs z-depth-1">
              <li className="tab col s3"><a onClick={this.goToFeed.bind(this)}>Feed</a></li>
              <li className="tab col s3"><a onClick={this.goToChat.bind(this)}>Chat</a></li>
              <li className="tab col s3 disabled"><a href="#test3">Disabled Tab</a></li>
              <li className="tab col s3"><a href="#test4">Test 4</a></li>
            </ul>
          </div>
          <div id="test1" className="col s12">Test 1</div>
          <div id="test2" className="col s12">Test 2</div>
          <div id="test3" className="col s12">Test 3</div>
          <div id="test4" className="col s12">Test 4</div>
        </div> */}
        {/* <Tabs className='z-depth-1'>
           <Tab title="Feed" onClick={this.goToFeed.bind(this)} href='#'></Tab>
           <Tab title="Chat"><Chat /></Tab>
           <Tab title="Bill" active><Bill /></Tab>
           <Tab title="Events"><Calendar /></Tab>
        </Tabs> */}

        {/* <button onClick={this.goToFeed.bind(this)}>Feed</button>
        <button onClick={this.goToChat.bind(this)}>Chat</button>
        <button onClick={this.goToBill.bind(this)}>Bill</button>
        <button onClick={this.goToCalendar.bind(this)}>Calendar</button>
        <button onClick={this.goToHouseRules.bind(this)}>House Rules</button>
        <button onClick={this.editProfile.bind(this)}>Edit Profile</button>
        <button onClick={this.editHome.bind(this)}>Edit Home</button>
        { this.state.currentPage } */}
      </div>
    )
  }
}
