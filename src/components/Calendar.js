import React, { Component } from 'react'
import EventForm from './EventForm'
import EventList from './EventList'

export default class Calendar extends Component {
  render() {
    return (
      <div>
        <EventList />
        <p>Add an event:</p>
        <EventForm />
      </div>
    )
  }
}
