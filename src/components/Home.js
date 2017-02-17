import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchCurrentHome } from '../actions'

class Home extends Component {
  componentDidMount(){
    this.props.fetchCurrentHome()
  }

  render() {
    return (
      <div>
        { this.props.isRendering ?
          <p>No home</p> :
          [<p key="home"><b>Home Name: </b>{ this.props.name }</p>,
          <p key="address"><b>Address: </b>{ this.props.address }</p>,
          <p key="members"><b>Members: </b></p>,
          <ol key="members-list">
            { this.props.roommates.map((member, index) => <li key={index}>{ member.user_name }</li>) }
          </ol>]}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    isRendering: !state.home,
    name: state.home.name,
    address: state.home.address,
    roommates: state.home.users || []
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCurrentHome }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
