import React, { Component } from 'react'
import { Button } from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import { fetchCurrentHome, removeHome, kickMember } from '../actions'

class Home extends Component {
  constructor(props) {
    super(props)
    this.leaveHome = this.leaveHome.bind(this)
    this.kickMember = this.kickMember.bind(this)
  }

  componentDidMount(){
    this.props.fetchCurrentHome()
  }

  leaveHome() {
    this.props.removeHome()
    browserHistory.push("/homepage")
  }

  kickMember(event) {
    this.props.kickMember(this.props.id, event.target.id)
  }

  render() {
    return (
      <div className="row">
        <div className="col s11 z-depth-2">
        { this.props.existingHome ?
          <p>No Current Home</p> :
          [<p className='profile-info-header' key='home-header'>Home Name:</p>,
          <p className='profile-info' key="home"> { this.props.name }</p>,
          <p className='profile-info-header' key='address-header'>Address:</p>,
          <p className='profile-info' key="address"> { this.props.address }</p>,
          <p className='profile-info-header' key='admin-header'>Admin:</p>,
          <p className='profile-info' key="admin"> { this.props.admin.user_name }</p>,
          <p className='profile-info' key="members">Members:</p>,
          <ul key="members-list">
            { this.props.roommates.map((member, index) => {
              return <li key={index}>
                <img src={member.image_url} className="circle thumbnail" alt={member.first_name}/>
                 <span className='profile-info'>  { member.user_name }</span>
                { member.id !== this.props.currentUser.id ? <Button onClick={this.kickMember} id={member.id} data-confirm="hi" className="right">Remove</Button> : null }
              </li>
            }) }
          </ul>,
          <p key="remove-home"><Button onClick={this.leaveHome}>Leave Home</Button></p>]}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    existingHome: !state.home,
    currentUser: state.currentUser,
    id: state.home.id,
    name: state.home.name,
    address: state.home.address,
    admin: state.home.admin,
    roommates: state.home.users || []
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCurrentHome, removeHome, kickMember }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
