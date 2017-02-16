import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  render() {
    return (
      <div>
        { this.props.homeName && this.props.homeAddress ? [<p key="1">{ this.props.homeName }</p>, <p key="2">{ this.props.homeAddress }</p>] : <p>No home</p> }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    homeName: state.session.homeName,
    homeAddress: state.session.homeAddress
  }
}

export default connect(mapStateToProps)(Home)
