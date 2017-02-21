import React, { Component } from 'react'
import { Button, Icon, Input } from 'react-materialize'
import { addEvent } from '../actions'

export default class EventForm extends Component {
  constructor(){
    super()

    this.state = {
      title: '',
      date: '',
      description: '',
      startTime: '',
      endTime: ''
    }
  }

  submitHandler(e){
    e.preventDefault()
    const event = {
      title: this.state.title,
      date: this.state.date,
      description: this.state.description,
      start_date: this.state.startDate,
      end_date: this.state.endDate
    }

    addEvent(event)
    this.setState({
      title: '',
      date: '',
      description: '',
      startDate: '',
      endDate: ''
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={this.submitHandler.bind(this)}>
          <Input
            m={6}
            label="Event Title"
            value={ this.state.title }
            onChange={ (event) => this.setState({ title: event.target.value }) }
          />

          <Input
            m={6}
            label="Event Description"
            className="materialize-textarea"
            value={ this.state.description }
            onChange={ (event) => this.setState({ description: event.target.value }) }
          />

          <p className='col s6 hide-on-small-only'>Start Date/Time</p>
          <p className='col s6 hide-on-small-only'>End Date/Time</p>
          
          <Input
            type="datetime-local"
            id="startDate"
            m={6}
            value={ this.state.startDate}
            onChange={ (event) => {
              this.setState({ startDate: event.target.value })} }
            />

          <Input
            type="datetime-local"
            id="endDate"
            m={6}
            value={ this.state.endDate }
            onChange={ (event) => {
              this.setState({ endDate: event.target.value })} }
            />

          <Button type='submit' m={6} s={12}>
            <Icon>done</Icon>
          </Button>
        </form>
      </div>
    )
  }
}
