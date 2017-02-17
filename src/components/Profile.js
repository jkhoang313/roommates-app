import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchUser } from '../actions'
import { bindActionCreators } from 'redux'

class Profile extends Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  render() {
    return (
      <div>
        <p><img src={ this.props.imageURL } alt={ this.props.firstName }/></p>
        <p><b>Username:</b> { this.props.userName }</p>
        <p><b>Email:</b> { this.props.email }</p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    firstName: state.currentUser.first_name,
    lastName: state.currentUser.last_name,
    userName: state.currentUser.user_name,
    email: state.currentUser.email,
    imageURL: state.currentUser.image_url
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
