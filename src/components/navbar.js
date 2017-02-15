import React, { Component } from 'react'
import { Link } from 'react-router'
import { bindActionCreators } from 'redux'
import { logout } from '../actions/index'
import { connect } from 'react-redux'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  logout() {
    sessionStorage.clear()
    this.props.logout()
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to="/homepage" className="brand-logo left">Roommates</Link>
          <ul id="nav-mobile" className="right">
          { this.props.session ?
            [ <li>{ this.props.fullName }</li>,
              <li><Link to="/login" onClick={ this.logout }>Log Out</Link></li>] :
            [ <li><Link to="/signup">Sign Up</Link></li>,
              <li><Link to="/login">Log In</Link></li>] }
          </ul>
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
  return bindActionCreators({ logout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
