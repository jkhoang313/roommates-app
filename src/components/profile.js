import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions/index'
import { bindActionCreators } from 'redux'

class Profile extends Component {
  componentDidMount() {
    this.props.fetchUser(sessionStorage.jwt)
  }

  render() {
    return (
      <div>
        <p>{ this.props.fullName }</p>
        <p>{ this.props.email }</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    fullName: state.session.fullName,
    email: state.session.email,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
