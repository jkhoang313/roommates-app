import React, { Component } from 'react'
import EventForm from './EventForm'
import EventList from './EventList'

export default class Calendar extends Component {
  render() {
    return (
      <div>
        <EventList />
        <p>Calendar</p>
        <EventForm />
      </div>
    )
  }
}
