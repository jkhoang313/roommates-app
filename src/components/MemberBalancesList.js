import React, { Component } from 'react'
import { connect } from 'react-redux'

class MemberBalancesList extends Component {
  // add pay option
  // error here in debugger
  // fix state (all of the charges gets updated)
  constructor(props) {
    super(props)
    this.state = {
      chargeAmount: 0
    }
    this.chargeRoommate = this.chargeRoommate.bind(this)
  }

  chargeRoommate() {
    // debugger
  }

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
                <p className={ user.balance <= 0 }>{ user.balance*-1 }</p>
                { user.id !== this.props.currentUser.id ? <form className="charge-roommate" onSubmit={ this.chargeRoommate.bind(this) }>
                  <label htmlFor="charge-amount">Amount</label>
                  <input type="number" id="charge-amount" min="0.01" step="0.01" value={ this.state.chargeAmount } onChange={(event) => this.setState({ chargeAmount: event.target.value })}/>

                  <input type="submit" value="Charge"/>
                </form> : null }
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
