import React, { Component } from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

class Navbar extends Component {
  constructor(props) {
    super(props)
  }

  logout() {
    debugger
  }

  render() {
    var sessionTag
    if (this.props.session) {
      sessionTag = <ul id="nav-mobile" className="right">
        <li><Link to="/homepage" onClick={this.logout.bind(this)}>Log Out</Link></li>
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
    session: !!state.session
  }
}

export default connect(mapStateToProps)(Navbar)
