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
                <br></br>
                <span><u>{ user.user_name }</u></span>
              </div>
              <div className="card-stacked">
                <span>Balance</span>
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
