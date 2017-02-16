import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import Home from './Home'
import HomeForm from './HomeForm'
import Wall from './Wall'

class Homepage extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s3">
          {this.props.loggedIn ? [< Profile />, < Home />] : <p>hi</p> }
        </div>
        <div className="col s9">
          { this.props.existingHome ? < Wall /> : < HomeForm /> }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    existingHome: state.home,
    loggedIn: state.currentUser
  }
}

export default connect(mapStateToProps)(Homepage)
