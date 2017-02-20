import React, { Component } from 'react'
import { connect } from 'react-redux'

class MemberBalancesList extends Component {
  render() {
    return (
      <div className="col s12">
        <div className="row">
          { this.props.users.map((user) => {
            return <div className="card horizontal col s3" key={ user.user_name }>
              <div className="card-image">
                <img src={ user.image_url } className="card-image" alt={ user.user_name }/>
                <br/><span>{ user.user_name } </span>
              </div>
              <div className="card-stacked">
                <p>{ user.balance }</p>
              </div>
            </div>
            }
          )}
        </div>
      </div>
    )
  }
}
//
// <div className="card horizontal col s3">
//   <div className="card-image">
//     <img src="http://lorempixel.com/100/190/nature/6" className="card-image"/>
//   </div>
//   <div className="card-stacked">
//     <div className="card-content">
//       <span>I am a very simple card. </span>
//     </div>
//     <div className="card-action">
//       <span>I am a very simple card. </span>
//     </div>
//   </div>
// </div>


function mapStateToProps(state) {
  return {
    users: state.bill.users
  }
}

export default connect(mapStateToProps)(MemberBalancesList)
