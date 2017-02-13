import React, { Component } from 'react'
import Profile from './profile'
import Wall from './wall'

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
