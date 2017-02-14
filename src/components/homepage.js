import React, { Component } from 'react'
import { connect } from 'react-redux'
import Profile from './Profile'
import Wall from './Wall'
import Home from './Home'
import HomeForm from './HomeForm'

class Homepage extends Component {
  render() {
    var homeInfo
    if (this.props.homeName){
      homeInfo = < Wall />
    } else {
      homeInfo = < HomeForm />
    }
    return (
      <div className="row">
        <div className="col s2">
          < Profile />
          < Home />
        </div>
        <div className="col s10">
          { homeInfo }
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

export default connect(mapStateToProps)(Home)
