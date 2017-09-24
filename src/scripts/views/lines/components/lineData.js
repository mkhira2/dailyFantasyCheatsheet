import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import moment from 'moment'
import STORE from '../../../store'
import ACTIONS from '../../../actions'
import ReactTooltip from 'react-tooltip'

import LastUpdated from './../../components/lastUpdated'

var LineData = React.createClass({
    showLineModal: function(){
      alert('Vegas Line Modal')
    },
    render: function() {
      var tableResponsive = {
        overflowX:"auto"
      }
      return (
        <div className='data-container'>
          <div className='section-header'>
            <div className='section-overlay'>
              <div className='section-info'>
                <h4>Vegas Lines &nbsp;<i className="fa fa-info-circle" aria-hidden="true" onClick={this.showLineModal}></i></h4>
              </div>
              <div className='legend-wrapper'>
                  <div className='legend'>Good  &nbsp;<div id='great'></div></div>
                  <div className='legend'><div id='good'></div></div>
                  <div className='legend'><div id='average'></div></div>
                  <div className='legend'><div id='below'></div></div>
                  <div className='legend'><div id='terrible'></div>  &nbsp;Poor</div>
              </div>
            </div>
          </div>
        <div className='stat-data-wrapper'>
          <div className='table-spacing'>
          <div className='stat-table' style={tableResponsive}>
            <div className="notes" id="linenotes">
              <LastUpdated />

                </div>
            <table id="complete" className="tablesorter table table-condensed table-striped table-hover">
              <Headers />
              <Body data={this.props.lines}/>
            </table>
          </div>
          </div>
        </div>
        <ReactTooltip place="bottom" effect="solid" multiline={true} offset={{bottom: 20, right: 9}}/>
        </div>
      )
  }
})

var Headers = React.createClass({
  componentDidMount: function() {
    $("#complete").tablesorter();
  },
  render: function () {
    return (
      <thead>
        <tr>
          <th><span id='th-pointer' data-tip="Game Time">TIME (ET)</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          <th><span id='th-pointer' data-tip="Team Name">TEAM</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          <th><span id='th-pointer' data-tip="Opponent">OPP</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          <th><span id='th-pointer' data-tip="Vegas Line">LINE</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          <th><span id='th-pointer' data-tip="Vegas Game Total">GM TTL</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          <th><span id='th-pointer' data-tip="Vegas Team Total">TM TTL</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        </tr>
      </thead>
    )
  }
})

var Body = React.createClass({
  render: function() {
    var preSortedData = this.props.data.sort(function(a,b){return moment(a.time.display) - moment(b.time.display)})
    return (
      <tbody>
        {preSortedData.map(function(team, i) {
          return (
            <tr key={i}>
              <td id='align-left'>{moment(team.time.display).format('ddd, M/DD h:mm A')}</td>
              <td id='align-left'> {ACTIONS.getTeamName(team.team)}</td>
              <td>{team.opponent}</td>
              <td>{team.line}</td>
              <td>{team.overunder}</td>
              <TD teamTotal = {ACTIONS.calcTeamTotal(team.overunder, team.line)} />
            </tr>
          )
         })}
      </tbody>
    );
  }
})

var TD = React.createClass({
  render: function() {
    var num = this.props.teamTotal
    var highlightGreen = {
      backgroundColor: "#58b670",
    }
    var highlightLightGreen = {
      backgroundColor: "#add075",
    }
    var highlightLightNuetral = {
      backgroundColor: "#ffff99",
    }
    var highlightLightRed = {
      backgroundColor: "#f98567",
    }
    var highlightRed = {
      backgroundColor: "#F75E60",
    }

    if (num >= 26) {
      return (
        <td style={highlightGreen}>
          {this.props.teamTotal}
        </td>
      )
    }
    if (num >= 24 && num < 26) {
      return (
        <td style={highlightLightGreen}>
          {this.props.teamTotal}
        </td>
      )
    }
    if (num >= 22 && num < 24) {
      return (
        <td style={highlightLightNuetral}>
          {this.props.teamTotal}
        </td>
      )
    }
    if (num <= 22 && num >= 20) {
      return (
        <td style={highlightLightRed}>
          {this.props.teamTotal}
        </td>
      )
    }

    if (num < 20) {
      return (
        <td style={highlightRed}>
          {this.props.teamTotal}
        </td>
      )
    }

    else {
      return (
        <td>
          {this.props.teamTotal}
        </td>
      )
    }

  }
})

export default LineData
