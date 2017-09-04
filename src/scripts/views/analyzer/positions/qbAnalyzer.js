import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import numeral from 'numeral'
import STORE from '../../../store'
import ACTIONS from '../../../actions'
import ReactTooltip from 'react-tooltip'

import LastUpdated from './../../components/lastUpdated'
import Note from './../../components/note'

var QBAnalyzer = React.createClass({
	render: function() {
		if (this.props.showQBCheat === false) {
			return null
		}
		return (
			<div className='stat-container'>
				<div className="notes">
					<LastUpdated />
			        <Note />
		        </div>
				<div className='stat-table' >
			    <table id="complete" className="tablesorter">
						<Headers />
						<Body qbData = {this.props.qbData}/>
			    </table>
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
				<th id='widen-th' className='headercol'>PLAYER <span data-tip="Player Name"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th id='widen-th'>TEAM <span data-tip="Team Name"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>OPP <span data-tip="Opponent"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th id='shrink-th'>SLATE <span data-tip="Slate"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th id='shrink-th'>INJ <span data-tip="Injuries"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>DK SALARY <span data-tip="DraftKings Salary"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>FPPG <span data-tip="DraftKings Fantasy<br>Points Per Game"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th id='break'>PROJ <span data-tip="Projection"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th>H-VALUE <span data-tip="H-Value<br>(by Footballguys)"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th>OWN <span data-tip="Ownage %<br>(by Rotowire)"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th id='break'>LINE <span data-tip="Vegas Line"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>GM TOTAL <span data-tip="Vegas Game Total"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>TM TOTAL <span data-tip="Vegas Team Total"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th className='notice' id='break'>DvQB <span data-tip="Defense Vs. QB Grade<br>(Based on Fantasy Points<br>Against Position)"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th className='notice'>P DVOA <span data-tip="Pass Defense DVOA<br>(by Fantasy Outsiders)<br><br>*2016 Rating<br>Will be update after<br>Week 4"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th id='break' className='notice'>TTL TD/G <span data-tip="Total Touchdowns<br>Per Game"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th className='notice'>P TD/G <span data-tip="Passing Touchdowns<br>Per Game"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th className='notice'>TD % <span data-tip="Touchdowns<br>Per Attempt"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th className='notice'>TTL YDS/G <span data-tip="Total Yards<br>Per Game"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th className='notice'>P RATING <span data-tip="Passer Rating"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th className='notice'>P YDS/G <span data-tip="Passing Yards<br>Per Game"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th className='notice'>YDS/ATT <span data-tip="Yards Per Attempt"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
	        </tr>
      	</thead>


    )
  }
})

var Body = React.createClass({
  render: function() {
    // console.log(this.props.qbData);
    return (
      <tbody>
        {this.props.qbData.map(function(player, i) {
            return (
              <tr key={i}>
                <td id='align-left' className='firstcol'>{player.player}</td>
				<td id='align-left'>{player.team}</td>
				<td>{player.opp}</td>
        <Day day={player.day}/>
        <Injury injury={player.injury}/>
        <Salary salary={numeral(player.salary).format('0,000')}/>
				<FPPG fppg={numeral(player.fppg).format('0.00')}/>
        <Proj proj={numeral(player.proj).format('0.00')}/>
        <HValue hValue={numeral(player.hValue).format('0.00')}/>
        <Own own={numeral(player.own).format('0.00')}/>
				<Line line={player.line}/>
        <GameTotal gameTotal={player.gameTotal}/>
				<TeamTotal teamTotal={player.teamTotal}/>
				<Matchup matchup={player.matchup}/>
        <PassDVOA passDvoa={player.dvoa_pass_rank}/>
				<TotalTdPerGame ttltdpg={numeral(player.ttltdpg).format('0.00')}/>
				<PassTdPerGame patdpg={numeral(player.patdpg).format('0.00')}/>
				<TdPercent tdpct={numeral(player.tdpct*100).format('0.00')} />
				<TotalYdsPerGame ttlydspg={numeral(player.ttlydspg).format('0.00')} />
				<PassRate prate={numeral(player.prate).format('0.0')} />
				<PassYdsPerGame paydspg={numeral(player.paydspg).format('0.00')} />
				<YdsPerAtt ydspatt={numeral(player.ydspatt).format('0.00')} />
              </tr>
            )
         })}
      </tbody>
    );
  }
})

var Day = React.createClass({
  	render: function() {
    	var day = this.props.day
	    var highlightGreen = {
	      color: "#58b670",
        fontWeight: "bold"
	    }
	    var highlightLightGreen = {
	      color: "#add075",
        fontWeight: "bold"
	    }
	    var highlightLightNuetral = {
	      color: "#ffff99",
        fontWeight: "bold"
	    }
	    var highlightLightRed = {
	      color: "#f98567",
        fontWeight: "bold"
	    }
	    var highlightRed = {
	      color: "#F75E60",
        fontWeight: "bold"
	    }
	    var highlightWhite = {
	      color: "#fff",
	    }
	    if (day === 'Mon' || day === 'Thu') {
	    	return (
		        <td style={highlightRed}>
		          {this.props.day}
		        </td>
	     	)
	    }
	    else {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.day}
		        </td>
	    	)
	    }
	}
})

var Injury = React.createClass({
  	render: function() {
    	var inj = this.props.injury
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
	    var highlightWhite = {
	      color: "#fff",
	    }
	    if (inj === 'PUP' || inj === 'SSPD') {
	    	return (
		        <td style={highlightRed}>
		          {this.props.injury}
		        </td>
	     	)
	    }
	    if (inj === 'Q') {
	    	return (
		        <td style={highlightLightRed}>
		          {this.props.injury}
		        </td>
	      	)
	    }
	    else {
	    	return (
		        <td style={highlightGreen}>
		          GTG
		        </td>
	    	)
	    }
	}
})

var Salary = React.createClass({
  	render: function() {
    	var num = this.props.salary
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
	    var highlightWhite = {
	      color: "#fff",
	    }
	    if (num >= '7,400') {
	    	return (
		        <td style={highlightRed}>
		          ${this.props.salary}
		        </td>
	     	)
	    }
	    if (num >= '6,800' && num < '7,400') {
	    	return (
		        <td style={highlightLightRed}>
		          ${this.props.salary}
		        </td>
	      	)
	    }
	    if (num < '6,800' && num > '6,200') {
	    	return (
		        <td style={highlightLightNuetral}>
		          ${this.props.salary}
		        </td>
	      	)
	    }
	    if (num <= '6,200' && num > '5,600') {
	      	return (
		        <td style={highlightLightGreen}>
		          ${this.props.salary}
		        </td>
	      	)
	    }
	    if (num <= '5,600' && num > '1') {
	     	return (
		        <td style={highlightGreen}>
		          ${this.props.salary}
		        </td>
	     	)
	    }
	    else {
	    	return (
		        <td style={highlightWhite}>
		          ${this.props.salary}
		        </td>
	    	)
	    }
	}
})

var FPPG = React.createClass({
  	render: function() {
    	var num = this.props.fppg
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
	    if (num >= 22) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.fppg}
		        </td>
	     	)
	    }
	    if (num >= 17 && num < 22) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.fppg}
		        </td>
	      	)
	    }
	    if (num < 17 && num > 11) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.fppg}
		        </td>
	      	)
	    }
	    if (num <= 11 && num > 5) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.fppg}
		        </td>
	      	)
	    }
	    if (num <= 5) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.fppg}
		        </td>
	     	)
	    }
	    else {
	    	return (
		        <td>
		          {this.props.fppg}
		        </td>
	    	)
	    }
	}
})

var Proj = React.createClass({
  	render: function() {
    	var num = this.props.proj
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
      if (num >= 22) {
	    	return (
		        <td style={highlightGreen} id='break'>
		          {this.props.proj}
		        </td>
	     	)
	    }
	    if (num >= 17 && num < 22) {
	    	return (
		        <td style={highlightLightGreen} id='break'>
		          {this.props.proj}
		        </td>
	      	)
	    }
	    if (num < 17 && num > 11) {
	    	return (
		        <td style={highlightLightNuetral} id='break'>
		          {this.props.proj}
		        </td>
	      	)
	    }
	    if (num <= 11 && num > 5) {
	      	return (
		        <td style={highlightLightRed} id='break'>
		          {this.props.proj}
		        </td>
	      	)
	    }
	    if (num <= 5) {
	     	return (
		        <td style={highlightRed} id='break'>
		          {this.props.proj}
		        </td>
	     	)
	    }
	    else {
	    	return (
		        <td id='break'>
		          {this.props.proj}
		        </td>
	    	)
	    }
	}
})

var GameTotal = React.createClass({
  	render: function() {
    	var num = this.props.gameTotal
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
	    if (num >= 52) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.gameTotal}
		        </td>
	     	)
	    }
	    if (num >= 48 && num < 52) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.gameTotal}
		        </td>
	      	)
	    }
	    if (num < 48 && num > 44) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.gameTotal}
		        </td>
	      	)
	    }
	    if (num <= 44 && num > 40) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.gameTotal}
		        </td>
	      	)
	    }
	    if (num <= 40) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.gameTotal}
		        </td>
	     	)
	    }
	    else {
	    	return (
		        <td>
		          {this.props.gameTotal}
		        </td>
	    	)
	    }
	}
})

var HValue = React.createClass({
  	render: function() {
    	var num = this.props.hValue
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
	    if (num >= 64) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.hValue}
		        </td>
	     	)
	    }
	    if (num >= 48 && num < 64) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.hValue}
		        </td>
	      	)
	    }
	    if (num < 48 && num > 32) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.hValue}
		        </td>
	      	)
	    }
	    if (num <= 32 && num > 16) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.hValue}
		        </td>
	      	)
	    }
	    if (num <= 16) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.hValue}
		        </td>
	     	)
	    }
	    else {
	    	return (
		        <td>
		          {this.props.hValue}
		        </td>
	    	)
	    }
	}
})

var Own = React.createClass({
  	render: function() {
    	var num = this.props.own
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

	    if (num >= 12) {
	    	return (
		        <td style={highlightRed}>
		          {this.props.own}%
		        </td>
	     	)
	    }
	    if (num >= 9 && num < 12) {
	    	return (
		        <td style={highlightLightRed}>
		          {this.props.own}%
		        </td>
	      	)
	    }
	    if (num < 9 && num > 6) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.own}%
		        </td>
	      	)
	    }
	    if (num <= 6 && num > 3) {
	      	return (
		        <td style={highlightLightGreen}>
		          {this.props.own}%
		        </td>
	      	)
	    }
	    if (num <= 3) {
	     	return (
		        <td style={highlightGreen}>
		          {this.props.own}%
		        </td>
	     	)
	    }
	    else {
	    	return (
		      	<td>
		          {this.props.own}%
		        </td>
	    	)
	    }
	}
})

var Line = React.createClass({
  	render: function() {
    	var num = this.props.line
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

	    if (num <= -6) {
	    	return (
		        <td style={highlightGreen} id='break'>
		          {this.props.line}
		        </td>
	     	)
	    }
	    if (num <= -2 && num > -6) {
	    	return (
		        <td style={highlightLightGreen} id='break'>
		          {this.props.line}
		        </td>
	      	)
	    }
	    if (num > -2 && num < 2) {
	    	return (
		        <td style={highlightLightNuetral} id='break'>
		          {this.props.line}
		        </td>
	      	)
	    }
	    if (num <= 6 && num > 2) {
	      	return (
		        <td style={highlightLightRed} id='break'>
		          {this.props.line}
		        </td>
	      	)
	    }
	    if (num >= 6) {
	     	return (
		        <td style={highlightRed} id='break'>
		          {this.props.line}
		        </td>
	     	)
	    }
	    else {
	    	return (
		      	<td id='break'>
		          {this.props.line}
		        </td>
	    	)
	    }
	}
})

var GameTotal = React.createClass({
  	render: function() {
    	var num = this.props.gameTotal
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

	    if (num >= 48) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.gameTotal}
		        </td>
	     	)
	    }
	    if (num >= 46 && num < 48) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.gameTotal}
		        </td>
	      	)
	    }
	    if (num < 46 && num > 44) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.gameTotal}
		        </td>
	      	)
	    }
	    if (num <= 44 && num > 42) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.gameTotal}
		        </td>
	      	)
	    }
	    if (num <= 42) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.gameTotal}
		        </td>
	     	)
	    }
	    else {
	    	return (
		      	<td>
		          {this.props.gameTotal}
		        </td>
	    	)
	    }
	}
})

var TeamTotal = React.createClass({
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

	    if (num >= 28) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.teamTotal}
		        </td>
	     	)
	    }
	    if (num >= 26 && num < 28) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.teamTotal}
		        </td>
	      	)
	    }
	    if (num < 26 && num > 24) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.teamTotal}
		        </td>
	      	)
	    }
	    if (num <= 24 && num > 22) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.teamTotal}
		        </td>
	      	)
	    }
	    if (num <= 22) {
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

var Matchup = React.createClass({
  	render: function() {
    	var num = this.props.matchup
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
	    var highlightWhite = {
	      color: "#fff",
	    }

	    if (num === "F") {
	    	return (
		        <td style={highlightRed} id='break'>
		          {this.props.matchup}
		        </td>
	     	)
	    }
	    if (num === "D") {
	    	return (
		        <td style={highlightLightRed} id='break'>
		          {this.props.matchup}
		        </td>
	      	)
	    }
	    if (num === "C") {
	    	return (
		        <td style={highlightLightNuetral} id='break'>
		          {this.props.matchup}
		        </td>
	      	)
	    }
	    if (num === "B") {
	      	return (
		        <td style={highlightLightGreen} id='break'>
		          {this.props.matchup}
		        </td>
	      	)
	    }
	    if (num === "A") {
	     	return (
		        <td style={highlightGreen} id='break'>
		          {this.props.matchup}
		        </td>
	     	)
	    }
	    if (num === " ") {
	     	return (
		        <td style={highlightWhite} id='break'>
		          {this.props.matchup}
		        </td>
	     	)
	    }
	}
})

var PassDVOA= React.createClass({
  	render: function() {
    	var num = this.props.passDvoa
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
		          {this.props.passDvoa}
		        </td>
	     	)
	    }
	    if (num >= 20 && num < 26) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.passDvoa}
		        </td>
	      	)
	    }
	    if (num < 20 && num > 13) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.passDvoa}
		        </td>
	      	)
	    }
	    if (num <= 13 && num > 7) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.passDvoa}
		        </td>
	      	)
	    }
	    if (num <= 7) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.passDvoa}
		        </td>
	     	)
	    }
	    else {
	    	return (
		        <td>
		          {this.props.passDvoa}
		        </td>
	    	)
	    }
	}
})

var TotalTdPerGame = React.createClass({
  	render: function() {
    	var num = this.props.ttltdpg
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
	    var highlightWhite = {
	      color: "#fff",
	    }

	    if (num >= 2.4) {
	    	return (
		        <td style={highlightGreen} id='break'>
		          {this.props.ttltdpg}
		        </td>
	     	)
	    }
	    if (num >= 1.8 && num < 2.4) {
	    	return (
		        <td style={highlightLightGreen} id='break'>
		          {this.props.ttltdpg}
		        </td>
	      	)
	    }
	    if (num < 1.8 && num > 1.2) {
	    	return (
		        <td style={highlightLightNuetral} id='break'>
		          {this.props.ttltdpg}
		        </td>
	      	)
	    }
	    if (num <= 1.2 && num > 0.6) {
	      	return (
		        <td style={highlightLightRed} id='break'>
		          {this.props.ttltdpg}
		        </td>
	      	)
	    }
	    if (num <= 0.6) {
	     	return (
		        <td style={highlightRed} id='break'>
		          {this.props.ttltdpg}
		        </td>
	     	)
	    }
	}
})

var PassTdPerGame = React.createClass({
  render: function() {
    var num = this.props.patdpg
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
    var highlightWhite = {
      color: "#fff",
    }

    if (num >= 2.4) {
      return (
          <td style={highlightGreen}>
            {this.props.patdpg}
          </td>
      )
    }
    if (num >= 1.8 && num < 2.4) {
      return (
          <td style={highlightLightGreen}>
            {this.props.patdpg}
          </td>
        )
    }
    if (num < 1.8 && num > 1.2) {
      return (
          <td style={highlightLightNuetral}>
            {this.props.patdpg}
          </td>
        )
    }
    if (num <= 1.2 && num > 0.6) {
        return (
          <td style={highlightLightRed}>
            {this.props.patdpg}
          </td>
        )
    }
    if (num <= 0.6) {
      return (
          <td style={highlightRed}>
            {this.props.patdpg}
          </td>
      )
    }
}
})

var TdPercent = React.createClass({
  	render: function() {
    	var num = this.props.tdpct
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
	    var highlightWhite = {
	      color: "#fff",
	    }

	    if (num >= 8.8) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.tdpct}
		        </td>
	     	)
	    }
	    if (num >= 7.6 && num < 8.8) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.tdpct}
		        </td>
	      	)
	    }
	    if (num < 7.6 && num > 6.4) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.tdpct}
		        </td>
	      	)
	    }
	    if (num <= 6.4 && num > 5.2) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.tdpct}
		        </td>
	      	)
	    }
	    if (num <= 5.2) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.tdpct}
		        </td>
	     	)
	    }
	}
})

var TotalYdsPerGame = React.createClass({
  	render: function() {
    	var num = this.props.ttlydspg
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
	    var highlightWhite = {
	      color: "#fff",
	    }

	    if (num >= 300) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.ttlydspg}
		        </td>
	     	)
	    }
	    if (num >= 250 && num < 300) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.ttlydspg}
		        </td>
	      	)
	    }
	    if (num < 250 && num > 200) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.ttlydspg}
		        </td>
	      	)
	    }
	    if (num <= 200 && num > 150) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.ttlydspg}
		        </td>
	      	)
	    }
	    if (num <= 150) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.ttlydspg}
		        </td>
	     	)
	    }
	}
})

var PassRate = React.createClass({
  render: function() {
    var num = this.props.prate
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
    var highlightWhite = {
      color: "#fff",
    }

    if (num >= 108) {
      return (
          <td style={highlightGreen} >
            {this.props.prate}
          </td>
      )
    }
    if (num >= 96 && num < 108) {
      return (
          <td style={highlightLightGreen} >
            {this.props.prate}
          </td>
        )
    }
    if (num < 96 && num > 84) {
      return (
          <td style={highlightLightNuetral} >
            {this.props.prate}
          </td>
        )
    }
    if (num <= 84 && num > 72) {
        return (
          <td style={highlightLightRed} >
            {this.props.prate}
          </td>
        )
    }
    if (num <= 72) {
      return (
          <td style={highlightRed} >
            {this.props.prate}
          </td>
      )
    }
  }
})

var PassYdsPerGame = React.createClass({
  render: function() {
    var num = this.props.paydspg
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
    var highlightWhite = {
      color: "#fff",
    }

    if (num >= 300) {
      return (
          <td style={highlightGreen}>
            {this.props.paydspg}
          </td>
      )
    }
    if (num >= 250 && num < 300) {
      return (
          <td style={highlightLightGreen}>
            {this.props.paydspg}
          </td>
        )
    }
    if (num < 250 && num > 200) {
      return (
          <td style={highlightLightNuetral}>
            {this.props.paydspg}
          </td>
        )
    }
    if (num <= 200 && num > 150) {
        return (
          <td style={highlightLightRed}>
            {this.props.paydspg}
          </td>
        )
    }
    if (num <= 150) {
      return (
          <td style={highlightRed}>
            {this.props.paydspg}
          </td>
      )
    }
}
})

var YdsPerAtt = React.createClass({
  	render: function() {
    	var num = this.props.ydspatt
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
	    var highlightWhite = {
	      color: "#fff",
	    }

	    if (num >= 8) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.ydspatt}
		        </td>
	     	)
	    }
	    if (num >= 7 && num < 8) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.ydspatt}
		        </td>
	      	)
	    }
	    if (num < 7 && num > 6) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.ydspatt}
		        </td>
	      	)
	    }
	    if (num <= 6 && num > 5) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.ydspatt}
		        </td>
	      	)
	    }
	    if (num <= 5) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.ydspatt}
		        </td>
	     	)
	    }
	}
})

export default QBAnalyzer
