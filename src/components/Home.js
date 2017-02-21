import React, { Component } from 'react'
import { Button } from 'react-materialize'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
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
  }

  kickMember(event) {
    this.props.kickMember(this.props.id, event.target.id)
  }

  render() {
    return (
      <div>
        { this.props.existingHome ?
          <p>No home</p> :
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
                { member.id !== this.props.currentUser.id ? <Button onClick={this.kickMember} id={member.id}>Remove</Button> : null }
              </li>
            }) }
          </ul>,
          <p key="remove-home"><button onClick={this.leaveHome}>Leave Home</button></p>]}
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
