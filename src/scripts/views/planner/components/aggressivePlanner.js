import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import moment from 'moment'
import STORE from '../../../store'
import ACTIONS from '../../../actions'

var AggressivePlanner = React.createClass({
  handleSubmit: function(e) {
    event.preventDefault()
    let price = this.refs.casualPrice.value
    ACTIONS.calcBankroll(price)
    this.refs.casualPrice.value = ''
  },
    render: function() {
      let bankroll = this.props.bankroll
      return (
        <div className='planner-container'>
          <div className="input-result">
            <div className="bankroll-input">
              <p>ENTER YOUR YEARLY BANKROLL:</p>
              <form onSubmit={this.handleSubmit}>
                <span id="dollar">$<input type="text" ref="casualPrice" id="textBox"></input></span>
                <input type="submit" id="submit"></input>
              </form>
              {this.props.plannerError ? <p id="alertred">{this.props.error}</p> : null }
            </div>
            <div className="weekly-bankroll">
              <p>Weekly Bankroll</p>
              {bankroll.twentyPercent ? <p className="money">${bankroll.twentyPercent}</p> : <p className="money">$0 </p>}
            </div>
          </div>
          <AggressiveCalc bankroll={this.props.bankroll} />
    		</div>
      )
  }
})

var AggressiveCalc = React.createClass({
    render: function() {
      let bankroll = this.props.bankroll
      return (
        <div className='planner-table-container'>
          <div className="planner-summary">
            <div>
              <p>Game Breakdown - Aggressive</p>
            </div>
            <div>
            {bankroll.bankroll ? <p>Total Bankroll: ${bankroll.bankroll}</p> : <p>Total Bankroll: $ -- </p>}
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <th>CATEGORY</th>
                <th>GAME TYPES</th>
                <th>% WKLY BANKROLL</th>
                <th>DOLLAR AMOUNT</th>
              </tr>
              <tr>
                <td>Cash Games</td>
                <td>H2H, 50/50</td>
                <td>60%</td>
                  {bankroll.twentyPercent ? <td>${bankroll.aggSixtyPerc}</td> : <td>$ -- </td>}
              </tr>
              <tr>
                <td>GPP Games</td>
                <td>Tournaments</td>
                <td>40%</td>
                  {bankroll.twentyPercent ? <td>${bankroll.aggFortyPerc}</td> : <td>$ -- </td>}
              </tr>
            </tbody>
          </table>
        </div>
      )
  }
})



export default AggressivePlanner
