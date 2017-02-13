import React, { Component } from 'react'
import Profile from './Profile'
import Wall from './Wall'

export default class Homepage extends Component {
  render() {
    return (
      <div className="row">
        < Profile />
        < Wall />
      </div>
    )
  }
}
