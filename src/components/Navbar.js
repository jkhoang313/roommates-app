import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'
import { logout, fetchUser } from '../actions/index'


class Navbar extends Component {
  constructor(props) {
    super(props)
    this.logout = this.logout.bind(this)
  }

  componentDidMount() {
    if (!!sessionStorage.jwt) {
      this.props.fetchUser()
    }
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
          { this.props.currentUser ?
            [ <li key="1">{ this.props.userName }</li>,
              <li key="2"><Link to="/login" onClick={ this.logout }>Log Out</Link></li>] :
            [ <li key="1"><Link to="/signup">Sign Up</Link></li>,
             <li key="2"><Link to="/login">Log In</Link></li>] }
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
  return bindActionCreators({ logout, fetchUser }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
