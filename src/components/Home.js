import React, { Component } from 'react'
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
          [<p key="home"><b>Home Name: </b>{ this.props.name }</p>,
          <p key="address"><b>Address: </b>{ this.props.address }</p>,
          <p key="members"><b>Members: </b></p>,
          <ul key="members-list">
            { this.props.roommates.map((member, index) => {
              return <li key={index}>
                <img src={member.image_url} className="circle thumbnail" alt={member.first_name}/>
                 { member.user_name }
                <br></br>
                <button onClick={this.kickMember} id={member.id}>Kick</button>
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
    id: state.home.id,
    name: state.home.name,
    address: state.home.address,
    roommates: state.home.users || []
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCurrentHome, removeHome, kickMember }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
