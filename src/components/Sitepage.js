import React, { Component } from 'react'
// import chaticon from '../../public/images/chaticon.png'
// import billicon from '../../public/images/billicon.png'
// import eventicon from '../../public/images/eventicon.png'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { demoLogIn } from '../actions'

class Sitepage extends Component {
  
  handleDemo(event) {
    event.preventDefault()
    this.props.demoLogIn()
  }

  render() {
    return (
        <div className='sitepageStuff'>
          <div className='row section-1'>
            <h1 className='main-text col m8 offset-m2 s12 center header blue-text text-darken-2 header-logo'>Welcome to <span className='header-logo'>bunkr</span></h1>
          </div>
          <div className="wrapper">
            <button className="btn" style={{position: "absolute", top: "420px", left: "44%", width: "200px", fontSize: "15px"}} onClick={this.handleDemo.bind(this)}>Demo</button>
          </div>
          <div className='row section-4 white'>
            <div className='col m12 center'>
              <h3 className='header'>What is bunkr?</h3>
            </div>
            <div className='col m4 center'>
              <h5 className='header'>Group Messaging</h5>
              <i className='fa fa-comments fa-3x blue-text text-darken-2' />
              <p>Don't know where you misplaced your keys? Run out of an essential home item? Use our Chat feature to message your roomies and see if they can come to the rescue!</p>
            </div>
            <div className='col m4 center'>
              <h5 className='header'>Bill splitting</h5>
              <i className='fa fa-money fa-3x blue-text text-darken-2' />
              <p>Ever want an easier way to split costs for bills and other apartment resources? Use our Bills feature and get on track for a hasselfree way to split these fees!</p>
            </div>
            <div className='col m4 center'>
              <h5 className='header'>Event tracker</h5>
              <i className='fa fa-calendar fa-3x blue-text text-darken-2' />
              <p>Want to plan a party? Are you going away and need to make sure your plants are watered and your pets are fed? Look no futher than our Events tracker!</p>
            </div>
          </div>
        </div>
    )
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators({ demoLogIn }, dispatch)
}

export default connect(null, mapDispatchToProps)(Sitepage)
