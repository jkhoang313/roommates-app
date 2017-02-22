import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import Home from './Home'
import HomeForm from './HomeForm'
import Wall from './Wall'

class Homepage extends Component {
  render() {
    // need to fixed rendering, it loads home form when rendering
    return (
      <div className="container">
        <div className="row">
          <div className="col s3">
            { this.props.loggedIn ? [< Profile key="profile" />, < Home key="home" />] : <p>Please Log In</p> }
          </div>
          <div className="col s9">
            { this.props.existingHome ? this.props.children : < HomeForm /> }
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    existingHome: !!state.home,
    loggedIn: !!state.currentUser
  }
}

export default connect(mapStateToProps)(Homepage)
