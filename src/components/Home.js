import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchHome } from '../actions'

class Home extends Component {
  render() {
    return (
      <div>
        { !!this.props.name ? [<p key="1">{ this.props.name }</p>, <p key="2">{ this.props.address }</p>] : <p>No home</p> }
      </div>
    )
  }
}

function mapStateToProps(state) {
  if (!!state.home) {
    return {
      name: state.home.name,
      address: state.home.address
    }
  } else {
    return {}
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchHome }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
