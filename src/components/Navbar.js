import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { logOut, fetchUser } from '../actions/index'
import { Dropdown } from 'react-materialize'


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
      <div className='navbar-fixed'>
      <nav>
        <div className="nav-wrapper blue darken-2">
          <Link to="/" className="brand-logo left" id="nav-logo">bunkr</Link>
          <ul id="nav-mobile" className="right">
          { this.props.loggedIn ?
            [<li key="1"><Link to="/homepage/chat">Chat</Link></li>,
            <li key="2"><Link to="/homepage/bills">Bills</Link></li>,
            <li key="3"><Link to="/homepage/calendar">Events</Link></li>,
            <li key="4"><Link to="/homepage/house_rules">House Rules</Link></li>,
            <li key="5"><Dropdown options={{belowOrigin: true}}  trigger={<Link>Settings<i className="material-icons right">arrow_drop_down</i></Link>}>
              <li><Link to="/edit_profile">Edit Profile</Link></li>
              <li><Link to="/edit_home">Edit Home</Link></li>
              <li><Link to="/login" onClick={ this.logOut }>Log Out</Link></li>
            </Dropdown></li>,
            <li key="6">Signed in as { this.props.userName }</li>
            ] :
            [<li key="1"><Link to="/signup" className='profile-info'>Sign Up</Link></li>,
             <li key="2"><Link to="/login" className='profile-info'>Log In</Link></li>] }
          </ul>
        </div>
      </nav>
    </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    loggedIn: !!state.currentUser.id,
    userName: state.currentUser.user_name
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logOut, fetchUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
