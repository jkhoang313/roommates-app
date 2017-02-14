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
      <div className="col s3">
        <p>Profile Picture</p>
        <p>{this.props.fullName}</p>
        <p>{this.props.email}</p>
        <p>Address</p>
        <p>Your Roommates</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    session: !!state.session.jwt,
    fullName: state.session.fullName,
    email: state.session.email,
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchUser}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
