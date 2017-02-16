import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchHome } from '../actions'

class Home extends Component {

  componentDidMount(){
    this.props.fetchHome()
  }

  render() {
    return (
      <div>
        { !!this.props.name ? [
          <p key="1"><b>Home Name: </b>{ this.props.name }</p>,
          <p key="2"><b>Address: </b>{ this.props.address }</p>,
          <p><b>Members:</b></p>,
          <ol>
          {this.props.roommates.map((mate) => <li>{mate.user_name}</li>)}
          </ol>
        ] :
        <p>No home</p> }
      </div>
    )
  }
}

function mapStateToProps(state) {
  if (!!state.home) {
    return {
      name: state.home.name,
      address: state.home.address,
      roommates: state.home.users
    }
  } else {
    return {
      name: "",
      address: "",
      roommates: []
    }
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchHome }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
