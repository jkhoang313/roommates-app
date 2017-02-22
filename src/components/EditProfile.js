import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { updateUserProfile } from '../actions'
import { browserHistory } from 'react-router'

class EditProfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: this.props.firstName,
      lastName: this.props.lastName,
      userName: this.props.userName,
      email: this.props.email,
      password: "",
      passwordConfirmation: "",
      imageURL: this.props.imageURL
    }
    this.submitForm = this.submitForm.bind(this)
  }

  submitForm(event) {
    event.preventDefault()
    const user = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      user_name: this.state.userName,
      email: this.state.email,
      image_url: this.state.imageURL
    }
    this.props.updateUserProfile(user)
    browserHistory.push("/homepage")
  }

  render() {
    //change password form
    return (
      <div className="container">
        <div className="row">
          <div className="col s11 z-depth-2">
            <h4>Edit Profile</h4>
            <form className="left-align" onSubmit={this.submitForm}>
              <div className="input-field">
                <input type="text" id="first_name" value={ this.state.firstName } onChange={ (event) => this.setState({ firstName: event.target.value }) }/>
                <label htmlFor="first_name" className="active">First Name</label>
              </div>
              <div className="input-field">
                <input type="text" id="last_name" className="validate" value={ this.state.lastName } onChange={ (event) => this.setState({ lastName: event.target.value }) }/>
                <label htmlFor="last_name" className="active">Last Name</label>
              </div>
              <div className="input-field">
                <input type="text" id="user_name" className="validate" value={ this.state.userName } onChange={ (event) => this.setState({ userName: event.target.value }) }/>
                <label htmlFor="user_name" className="active">User Name</label>
              </div>
              <div className="input-field">
                <input type="text" id="email" className="validate" value={ this.state.email } onChange={ (event) => this.setState({ email: event.target.value }) }/>
                <label htmlFor="email" className="active">Email Address</label>
              </div>
              <div className="input-field">
                <input type="text" id="image-url" className="validate" value={ this.state.imageURL } onChange={ (event) => this.setState({ imageURL: event.target.value }) }/>
                <label htmlFor="image-url" className="active">Image URL</label>
              </div>
              <input type="submit" className="btn" value="Save"/>
              <button className="btn" onClick={this.props.goToWall}>Cancel</button>
            </form>
            <br></br>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    firstName: state.currentUser.first_name,
    lastName: state.currentUser.last_name,
    userName: state.currentUser.user_name,
    email: state.currentUser.email,
    imageURL: state.currentUser.image_url
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ updateUserProfile }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
