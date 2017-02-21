import React, { Component } from 'react'
import { connect } from 'react-redux'

class MemberBalancesList extends Component {
  render() {
    return (
      <div className="col s11">
        <div className="row">
          { this.props.users.map((user) => {
            return <div className="card horizontal col s3 green lighten-4" key={ user.user_name }>
              <div className="card-image center-align">
                <img src={ user.image_url } className="card-image circle" alt={ user.user_name }/>
                <br></br>
                <b>{ user.user_name }</b>
              </div>
              <div className="card-stacked center-align">
                <br></br>
                <u>Balance</u>
                <p className={ user.balance < 0 }>{ user.balance*-1 }</p>
              </div>
            </div>
            }
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.bill.users,
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(MemberBalancesList)
