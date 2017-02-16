import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'
import { bindActionCreators } from 'redux'

class Profile extends Component {
  componentDidMount() {
    this.props.fetchUser()
    // need to load state with nav bar instead
  }

  render() {
    return (
      <div>
        <p><img src={ this.props.imageURL }/></p>
        <p><b>Username:</b> { this.props.userName }</p>
        <p><b>Email:</b> { this.props.email }</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  debugger
  return {
    userName: state.currentUser.user_name,
    email: state.currentUser.email,
    imageURL: state.currentUser.image_url
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
