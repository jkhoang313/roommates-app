import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { fetchEvents } from '../actions'
// import Moment from 'react-moment';

class EventList extends Component {
  componentDidMount(){
    this.props.fetchEvents()
  }

  render() {
    return (
      <div className="row center-align">
        <div className="col s11">
          <div className="row">
          { this.props.events.map((event) =>
            <div className='col m4' key={event.id}>
              <div className="row">
                <div className="col s11 event-item z-depth-2">
                  <ul>
                    <li><h5><b>{event.title}</b></h5></li>
                    <li>{event.description}</li>
                    <li><b>Start:</b> {event.starting_date}</li>
                    <li><b>End:</b> {event.ending_date}</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          </div>
        </div>
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

// <li><b>Start:</b> <Moment format="MM-DD-YYYY h:mmA">{event.starting_date}</Moment></li>
// <li><b>End:</b> <Moment format="MM-DD-YYYY h:mmA">{event.ending_date}</Moment></li>
