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
      <div className="row">
        <div className="col s11 z-depth-2">
          <p><img src={ this.props.imageURL } className="prof-pic z-depth-1" alt={ this.props.firstName }/></p>
          <p className='profile-info profile-name'> { this.props.firstName } { this.props.lastName}</p>
          <p className='profile-info profile-username'> { this.props.userName }</p>
          <p className='profile-info profile-email'> { this.props.email }</p>
        </div>
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
