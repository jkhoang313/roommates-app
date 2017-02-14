import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { logout } from '../actions/index'
import { connect } from 'react-redux'


class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  logout() {
    sessionStorage.clear()
    this.props.logout()
  }

  render() {
    var sessionTag
    if (this.props.session) {
      sessionTag = <ul id="nav-mobile" className="right">
        <li>{this.props.fullName}</li>
        <li><Link to="/login" onClick={this.logout.bind(this)}>Log Out</Link></li>
      </ul>
    } else {
      sessionTag = <ul id="nav-mobile" className="right">
        <li><Link to="/signup">Sign Up</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    }

    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/homepage" className="brand-logo left">Roommates</Link>
          {sessionTag}
        </div>
      </nav>
    )
  }
}

function mapStateToProps(state) {
  return {
    session: !!state.session.jwt,
    fullName: state.session.fullName
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({logout}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
