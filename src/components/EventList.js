import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchEvents } from '../actions'
import Moment from 'react-moment';

class EventList extends Component {
  componentDidMount(){
    this.props.fetchEvents()
  }

  render(){
    return (
      <div className='row'>
          { this.props.events.map((event) =>
            <div className='col m3 event-item'>
              <ul>
                <li><b>{event.title}</b></li>
                <li>{event.description}</li>
                <li>Starting: <Moment format="MM-DD-YYYY h:mmA">{event.start_date}</Moment></li>
                <li>Ending: <Moment format="MM-DD-YYYY h:mmA">{event.end_date}</Moment></li>
                  <li></li>
              </ul>
            </div>
          )}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    events: state.events
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchEvents }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EventList)
