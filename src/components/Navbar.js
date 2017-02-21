import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { logOut, fetchUser } from '../actions/index'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this)
  }

  componentDidMount() {
    if (!!sessionStorage.jwt) {
      this.props.fetchUser()
    }
  }

  logOut() {
    sessionStorage.clear()
    this.props.logOut()
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper blue darken-2">
          <Link to="/homepage" className="brand-logo left" id="nav-logo">bunkr</Link>
          <ul id="nav-mobile" className="right">
          { this.props.currentUser ?
            [<li key="1"><Link to="/chat">Chat</Link></li>,
            <li key="2"><Link to="/bill">Bills</Link></li>,
            <li key="3"><Link to="/calendar">Events</Link></li>,
            <li key="4">Signed in as { this.props.userName }</li>,
            <li key="5"><Link to="/login" onClick={ this.logOut }>Log Out</Link></li>] :
            [<li key="1"><Link to="/signup" className='profile-info'>Sign Up</Link></li>,
             <li key="2"><Link to="/login" className='profile-info'>Log In</Link></li>] }
          </ul>
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    currentUser: !!state.currentUser.id,
    userName: state.currentUser.user_name
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logOut, fetchUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
