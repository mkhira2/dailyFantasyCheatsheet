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

var RBAnalyzer = React.createClass({
  	render: function() {
    	if (this.props.showRBCheat === false) {
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
						<Body rbData = {this.props.rbData}/>
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
				<th id='widen-th' className='headercol' >PLAYER <span data-tip="Player Name"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th id='widen-th'>TEAM <span data-tip="Team Name"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>OPP <span data-tip="Opponent"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th id="shrink-th">SLATE <span data-tip="Slate"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th id="shrink-th">INJ <span data-tip="Injuries"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>DK SALARY <span data-tip="DraftKings Salary"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>FPPG <span data-tip="DraftKings Fantasy<br>Points Per Game"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th id='break'>PROJ <span data-tip="Projection"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>VALUE <span data-tip="H-Value<br>(by Footballguys)"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        <th>OWN <span data-tip="Ownage %<br>(by Rotowire)"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th id='break'>LINE <span data-tip="Vegas Line"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>GM TOTAL <span data-tip="Vegas Game Total"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>TM TOTAL <span data-tip="Vegas Team Total"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th className='notice' id='break'>DvRB <span data-tip="Defense Vs. RB Grade<br>(Based on Fantasy Points<br>Against Position)"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th className='notice' >RU DVOA <span data-tip="Rush Defense DVOA<br>(by Fantasy Outsiders)<br><br>*2016 Rating<br>Will be update after<br>Week 4"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th className='notice' id='break'>TTL/YDS PG <span data-tip="Total Yards<br>Per Game"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th className='notice' >TTL/TD PG <span data-tip="Total Touchdowns<br>Per Game"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th className='notice' >TOUCH MKT <span data-tip="Marketshare %<br>for Team Touches"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th className='notice' >REC PG <span data-tip="Receptions<br>Per Game"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th className='notice' >REC YDS PG <span data-tip="Receiving Yards<br>Per Game"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th className='notice' >TARGET MKT <span data-tip="Marketshare %<br>for Team Targets"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
	        </tr>
      	</thead>
    )
  }
})

var Body = React.createClass({
  render: function() {
    return (
      <tbody>
        {this.props.rbData.map(function(player, i) {
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
        				<RushDVOA rushDvoa={player.dvoa_rush_rank}/>
        				<TotalYdsPerGame ttlydspg={numeral(player.ttlydspg).format('0.00')} />
        				<TotalTdPerGame ttltdpg={numeral(player.ttltdpg).format('0.00')} />
        				<TouchMktShare touchMktShare={numeral(player.touchMktShare*100).format('0.0')} />
        				<RecPerGame recpg={numeral(player.recpg).format('0.00')} />
        				<RecYdsGame reyds={numeral(player.reyds).format('0.00')} />
        				<TarMktShare targetMktShare={numeral(player.targetMktShare*100).format('0.0')} />
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
	    if (num >= '7,500') {
	    	return (
		        <td style={highlightRed}>
		          ${this.props.salary}
		        </td>
	     	)
	    }
	    if (num >= '6,600' && num < '7,500') {
	    	return (
		        <td style={highlightLightRed}>
		          ${this.props.salary}
		        </td>
	      	)
	    }
	    if (num < '6,600' && num > '5,700') {
	    	return (
		        <td style={highlightLightNuetral}>
		          ${this.props.salary}
		        </td>
	      	)
	    }
	    if (num <= '5,700' && num > '4,800') {
	      	return (
		        <td style={highlightLightGreen}>
		          ${this.props.salary}
		        </td>
	      	)
	    }
	    if (num <= '4,800' && num > '1') {
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
      if (num >= 20) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.fppg}
		        </td>
	     	)
	    }
	    if (num >= 15 && num < 20) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.fppg}
		        </td>
	      	)
	    }
	    if (num < 15 && num > 10) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.fppg}
		        </td>
	      	)
	    }
	    if (num <= 10 && num > 5) {
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
	    if (num >= 20) {
	    	return (
		        <td style={highlightGreen} id='break'>
		          {this.props.proj}
		        </td>
	     	)
	    }
	    if (num >= 15 && num < 20) {
	    	return (
		        <td style={highlightLightGreen} id='break'>
		          {this.props.proj}
		        </td>
	      	)
	    }
	    if (num < 15 && num > 10) {
	    	return (
		        <td style={highlightLightNuetral} id='break'>
		          {this.props.proj}
		        </td>
	      	)
	    }
	    if (num <= 10 && num > 5) {
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
	    if (num >= 40) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.hValue}
		        </td>
	     	)
	    }
	    if (num >= 30 && num < 40) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.hValue}
		        </td>
	      	)
	    }
	    if (num < 30 && num > 20) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.hValue}
		        </td>
	      	)
	    }
	    if (num <= 20 && num > 10) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.hValue}
		        </td>
	      	)
	    }
	    if (num <= 10) {
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
	    if (num >= 24 && num < 28) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.teamTotal}
		        </td>
	      	)
	    }
	    if (num < 24 && num > 22) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.teamTotal}
		        </td>
	      	)
	    }
	    if (num <= 22 && num > 20) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.teamTotal}
		        </td>
	      	)
	    }
	    if (num <= 20) {
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

var RushDVOA= React.createClass({
  	render: function() {
    	var num = this.props.rushDvoa
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
		          {this.props.rushDvoa}
		        </td>
	     	)
	    }
	    if (num >= 20 && num < 26) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.rushDvoa}
		        </td>
	      	)
	    }
	    if (num < 20 && num > 13) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.rushDvoa}
		        </td>
	      	)
	    }
	    if (num <= 13 && num > 7) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.rushDvoa}
		        </td>
	      	)
	    }
	    if (num <= 7) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.rushDvoa}
		        </td>
	     	)
	    }
	    else {
	    	return (
		        <td>
		          {this.props.rushDvoa}
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

	    if (num >= 100) {
	    	return (
		        <td style={highlightGreen} id='break'>
		          {this.props.ttlydspg}
		        </td>
	     	)
	    }
	    if (num >= 75 && num < 100) {
	    	return (
		        <td style={highlightLightGreen} id='break'>
		          {this.props.ttlydspg}
		        </td>
	      	)
	    }
	    if (num < 75 && num > 50) {
	    	return (
		        <td style={highlightLightNuetral} id='break'>
		          {this.props.ttlydspg}
		        </td>
	      	)
	    }
	    if (num <= 50 && num > 25) {
	      	return (
		        <td style={highlightLightRed} id='break'>
		          {this.props.ttlydspg}
		        </td>
	      	)
	    }
	    if (num <= 25) {
	     	return (
		        <td style={highlightRed} id='break'>
		          {this.props.ttlydspg}
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

	    if (num >= 1) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.ttltdpg}
		        </td>
	     	)
	    }
	    if (num >= 0.75 && num < 1) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.ttltdpg}
		        </td>
	      	)
	    }
	    if (num < 0.75 && num > 0.50) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.ttltdpg}
		        </td>
	      	)
	    }
	    if (num <= 0.50 && num > 0.25) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.ttltdpg}
		        </td>
	      	)
	    }
	    if (num <= 0.25) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.ttltdpg}
		        </td>
	     	)
	    }
	    else {
	     	return (
		        <td>
		          {this.props.ttltdpg}
		        </td>
	     	)
	    }
	}
})

var TouchMktShare = React.createClass({
  	render: function() {
    	var num = this.props.touchMktShare
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

	    if (num >= 48) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.touchMktShare}%
		        </td>
	     	)
	    }
	    if (num >= 36 && num < 48) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.touchMktShare}%
		        </td>
	      	)
	    }
	    if (num < 36 && num > 24) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.touchMktShare}%
		        </td>
	      	)
	    }
	    if (num <= 24 && num > 12) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.touchMktShare}%
		        </td>
	      	)
	    }
	    if (num <= 12) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.touchMktShare}%
		        </td>
	     	)
	    }
	    else {
	     	return (
		        <td>
		          {this.props.touchMktShare}%
		        </td>
	     	)
	    }
	}
})

var RecPerGame = React.createClass({
  	render: function() {
    	var num = this.props.recpg
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

	    if (num >= 4) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.recpg}
		        </td>
	     	)
	    }
	    if (num >= 3 && num < 4) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.recpg}
		        </td>
	      	)
	    }
	    if (num < 3 && num > 2) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.recpg}
		        </td>
	      	)
	    }
	    if (num <= 2 && num > 1) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.recpg}
		        </td>
	      	)
	    }
	    if (num <= 1) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.recpg}
		        </td>
	     	)
	    }
	    else {
	     	return (
		        <td>
		          {this.props.recpg}
		        </td>
	     	)
	    }
	}
})

var RecYdsGame = React.createClass({
  	render: function() {
    	var num = this.props.reyds
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
	    if (num >= 40) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.reyds}
		        </td>
	     	)
	    }
	    if (num >= 30 && num < 40) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.reyds}
		        </td>
	      	)
	    }
	    if (num < 30 && num > 20) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.reyds}
		        </td>
	      	)
	    }
	    if (num <= 20 && num > 10) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.reyds}
		        </td>
	      	)
	    }
	    if (num <= 10) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.reyds}
		        </td>
	     	)
	    }
	    else {
	     	return (
		        <td>
		          {this.props.touchMktShare}%
		        </td>
	     	)
	    }
	}
})

var TarMktShare = React.createClass({
  	render: function() {
    	var num = this.props.targetMktShare
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
	    if (num >= 16) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.targetMktShare}%
		        </td>
	     	)
	    }
	    if (num >= 12 && num < 16) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.targetMktShare}%
		        </td>
	      	)
	    }
	    if (num < 12 && num > 8) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.targetMktShare}%
		        </td>
	      	)
	    }
	    if (num <= 8 && num > 4) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.targetMktShare}%
		        </td>
	      	)
	    }
	    if (num <= 4) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.targetMktShare}%
		        </td>
	     	)
	    }
	    else {
	     	return (
		        <td>
		          {this.props.targetMktShare}%
		        </td>
	     	)
	    }
	}
})

export default RBAnalyzer
