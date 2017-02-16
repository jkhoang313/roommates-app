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
        <div className="col s2">
          < Profile />
          < Home />
        </div>
        <div className="col s10">
          { this.props.homeName && this.props.homeAddress ? < Wall /> : < HomeForm /> }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    homeName: state.session.homeName,
    homeAddress: state.session.homeAddress
  }
}

export default connect(mapStateToProps)(Homepage)
