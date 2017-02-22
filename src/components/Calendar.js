import React, { Component } from 'react'
import EventForm from './EventForm'
import EventList from './EventList'

export default class Calendar extends Component {
  render() {
    return (
      <div className="row">
        <div className="col s11 z-depth-2">
        <h3>Calendar</h3>

        <EventList />
        <p>Add an event:</p>
        <EventForm />
        </div>
      </div>
    )
  }
}
