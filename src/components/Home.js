import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCurrentHome, removeHome } from '../actions'

class Home extends Component {
  constructor(props) {
    super(props)
    this.leaveHome = this.leaveHome.bind(this)
  }
  componentDidMount(){
    this.props.fetchCurrentHome()
  }

  leaveHome() {
    this.props.removeHome()
  }

  render() {
    return (
      <div>
        { this.props.existingHome ?
          <p>No home</p> :
          [<p key="home"><b>Home Name: </b>{ this.props.name }</p>,
          <p key="address"><b>Address: </b>{ this.props.address }</p>,
          <p key="members"><b>Members: </b></p>,
          <ol key="members-list">
            { this.props.roommates.map((member, index) => <li key={index}>{ member.user_name }</li>) }
          </ol>,
          <p key="remove-home"><button onClick={this.leaveHome}>Leave Home</button></p>]}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    existingHome: !state.home,
    name: state.home.name,
    address: state.home.address,
    roommates: state.home.users || []
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCurrentHome, removeHome }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
