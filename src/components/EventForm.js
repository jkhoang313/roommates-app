import React, { Component } from 'react'
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
          <div className="input-field">
            <input
              type="text" id="title"
              value={ this.state.title }
              onChange={ (event) => this.setState({ title: event.target.value }) }/>
            <label htmlFor="name">Event Title</label>
          </div>
          <div className="input-field">
            <textarea id="description"
              className="materialize-textarea"
              value={ this.state.description }
              onChange={ (event) => this.setState({ description: event.target.value }) }/>
              <label htmlFor="description">Description</label>
          </div>
          <div className="input-field">
            <p>start date:</p>
            <input
              type="datetime-local" id="startDate"
              value={ this.state.startDate}
              onChange={ (event) => {
                this.setState({ startDate: event.target.value })} }
              />
          </div>
          <div className="input-field">
            <input
              type="datetime-local" id="endDate"
              value={ this.state.endDate }
              onChange={ (event) => {
                this.setState({ endDate: event.target.value })} }
              />
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
