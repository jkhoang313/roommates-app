import React, { Component } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
  constructor(props){
    super(props)
  }
  render() {
    var homeInfo
    if (this.props.homeName){
      homeInfo = <div>
        <h1>{ this.props.homeName }</h1>
        <h1>{ this.props.homeAddress }</h1>
      </div>
    } else {
      <div>
        <button></button>
      </div>
  }
    return (
      <div>

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
