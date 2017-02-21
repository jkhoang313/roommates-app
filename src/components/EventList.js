import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchEvents } from '../actions'
import BigCalendar from 'react-big-calendar';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

class EventList extends Component {
  componentDidMount(){
    this.props.fetchEvents()
  }

  render(){
    return (
      <div>
        <ul className="left-align">
          { this.props.events.map((event) =>
            <li>
              <ul>
                <li>{event.title}</li>
                <li>{event.description}</li>
                  <li></li>
              </ul>
            </li>
          )}
        </ul>
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
