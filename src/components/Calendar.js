import React, { Component } from 'react'
import EventForm from './EventForm'
import EventList from './EventList'

export default class Calendar extends Component {
  render() {
    return (
      <div>
        <h3>Calendar</h3>

        <EventList />
        <EventForm />
      </div>
    )
  }
}
