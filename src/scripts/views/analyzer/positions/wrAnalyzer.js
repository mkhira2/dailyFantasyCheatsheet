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

var WRAnalyzer = React.createClass({
  render: function() {
    if (this.props.showWRCheat === false) {
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
            <Body wrData = {this.props.wrData}/>
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
    				<th id='widen-th' className='headercol' ><span id='th-pointer' data-tip="Player Name">PLAYER</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th id='widen-th'><span id='th-pointer' data-tip="Team Name">TEAM</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Opponent">OPP</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
            <th id="shrink-th"><span id='th-pointer' data-tip="Slate">SLT</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
            <th id="shrink-th"><span id='th-pointer' data-tip="Injuries">INJ</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="DraftKings Salary">SAL</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="DraftKings Fantasy<br>Points Per Game">FPPG</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
            <th id='break'><span id='th-pointer' data-tip="Projection">PROJ</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="H-Value<br>(by Footballguys)">VAL</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
            <th><span id='th-pointer' data-tip="Ownage %<br>(by Rotowire)">OWN</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th id='break'><span id='th-pointer' data-tip="Vegas Line">LINE</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Vegas Game Total">G/TL</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Vegas Team Total">T/TL</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th  className='notice'  id='break'><span id='th-pointer' data-tip="Defense Vs. WR Grade<br>(Based on Fantasy Points<br>Against Position)">DvWR</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th className='notice' ><span id='th-pointer' data-tip="Wide Receiver Defense DVOA<br>(by Fantasy Outsiders)<br><br>*2016 Rating<br>Will be update after<br>Week 4">DVOA</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th className='notice'  id='break'><span id='th-pointer' data-tip="Receiving Yards<br>Per Game">ReYD/G</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th className='notice' ><span id='th-pointer' data-tip="Receptions<br>Per Game">REC/G</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th className='notice' ><span id='th-pointer' data-tip="Targets<br>Per Game">TAR/G</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th className='notice' ><span id='th-pointer' data-tip="Marketshare %<br>for Team Targets">TAR/MK</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
            <th className='notice' ><span id='th-pointer' data-tip="Receiving<br>Touchdowns Per Game">ReTD/G</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
            <th className='notice' ><span id='th-pointer' data-tip="Redzone<br>Targets Per Game">RZ/TAR</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
	        </tr>
      	</thead>
    )
  }
})

var Body = React.createClass({
  render: function() {
    return (
      <tbody>
        {this.props.wrData.map(function(player, i) {
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
          			<RecYdsGame recydspg={numeral(player.recydspg).format('0.00')} />
          			<RecPerGame recpg={numeral(player.recpg).format('0.00')} />
          			<TarPerGame tarpg={numeral(player.tarpg).format('0.00')} />
          			<TarMktShare targetMktShare={numeral(player.targetMktShare*100).format('0.0')} />
                <RecTDPerGame retdpg={numeral(player.retdpg).format('0.00')} />
                <RZTarPerGame rztarpg={numeral(player.rztarpg).format('0.00')} />
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
	    if (num >= '8,000') {
	    	return (
		        <td style={highlightRed}>
		          ${this.props.salary}
		        </td>
	     	)
	    }
	    if (num >= '7,000' && num < '8,000') {
	    	return (
		        <td style={highlightLightRed}>
		          ${this.props.salary}
		        </td>
	      	)
	    }
	    if (num < '7,000' && num > '6,000') {
	    	return (
		        <td style={highlightLightNuetral}>
		          ${this.props.salary}
		        </td>
	      	)
	    }
	    if (num <= '6,000' && num > '5,000') {
	      	return (
		        <td style={highlightLightGreen}>
		          ${this.props.salary}
		        </td>
	      	)
	    }
	    if (num <= '5,000' && num > '1') {
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
		        <td style={highlightLightRed} >
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

var RecYdsGame = React.createClass({
  render: function() {
    var num = this.props.recydspg
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
    if (num >= 80) {
    	return (
	        <td style={highlightGreen} id='break'>
	          {this.props.recydspg}
	        </td>
     	)
    }
    if (num >= 60 && num < 80) {
    	return (
	        <td style={highlightLightGreen} id='break'>
	          {this.props.recydspg}
	        </td>
      	)
    }
    if (num < 60 && num > 40) {
    	return (
	        <td style={highlightLightNuetral} id='break'>
	          {this.props.recydspg}
	        </td>
      	)
    }
    if (num <= 40 && num > 20) {
      	return (
	        <td style={highlightLightRed} id='break'>
	          {this.props.recydspg}
	        </td>
      	)
    }
    if (num <= 20) {
     	return (
	        <td style={highlightRed} id='break'>
	          {this.props.recydspg}
	        </td>
     	)
    }
    else {
    	return (
	      	<td id='break'>
	          {this.props.recydspg}
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
    if (num >= 5.6) {
    	return (
	        <td style={highlightGreen}>
	          {this.props.recpg}
	        </td>
     	)
    }
    if (num >= 4.1 && num < 5.6) {
    	return (
	        <td style={highlightLightGreen}>
	          {this.props.recpg}
	        </td>
      	)
    }
    if (num < 4.1 && num > 2.8) {
    	return (
	        <td style={highlightLightNuetral}>
	          {this.props.recpg}
	        </td>
      	)
    }
    if (num <= 2.8 && num > 1.4) {
      	return (
	        <td style={highlightLightRed}>
	          {this.props.recpg}
	        </td>
      	)
    }
    if (num <= 1.4) {
     	return (
	        <td style={highlightRed}>
	          {this.props.recpg}
	        </td>
     	)
    }
    else {
    	return (
	      	<td id='break'>
	          {this.props.recpg}
	        </td>
    	)
    }
	}
})

var TarPerGame = React.createClass({
  render: function() {
    var num = this.props.tarpg
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
    if (num >= 8.8) {
    	return (
	        <td style={highlightGreen}>
	          {this.props.tarpg}
	        </td>
     	)
    }
    if (num >= 6.6 && num < 8.8) {
    	return (
	        <td style={highlightLightGreen}>
	          {this.props.tarpg}
	        </td>
      	)
    }
    if (num < 6.6 && num > 4.4) {
    	return (
	        <td style={highlightLightNuetral}>
	          {this.props.tarpg}
	        </td>
      	)
    }
    if (num <= 4.4 && num > 2.2) {
      	return (
	        <td style={highlightLightRed}>
	          {this.props.tarpg}
	        </td>
      	)
    }
    if (num <= 2.2) {
     	return (
	        <td style={highlightRed}>
	          {this.props.tarpg}
	        </td>
     	)
    }
    else {
    	return (
	      	<td>
	          {this.props.tarpg}
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
    if (num >= 25.6) {
    	return (
	        <td style={highlightGreen}>
	          {this.props.targetMktShare}
	        </td>
     	)
    }
    if (num >= 19.2 && num < 25.6) {
    	return (
	        <td style={highlightLightGreen}>
	          {this.props.targetMktShare}
	        </td>
      	)
    }
    if (num < 19.2 && num > 12.8) {
    	return (
	        <td style={highlightLightNuetral}>
	          {this.props.targetMktShare}
	        </td>
      	)
    }
    if (num <= 12.8 && num > 6.4) {
      	return (
	        <td style={highlightLightRed}>
	          {this.props.targetMktShare}
	        </td>
      	)
    }
    if (num <= 6.4) {
     	return (
	        <td style={highlightRed}>
	          {this.props.targetMktShare}
	        </td>
     	)
    }
    else {
    	return (
	      	<td >
	          {this.props.targetMktShare}
	        </td>
    	)
    }
	}
})

var RecTDPerGame = React.createClass({
  render: function() {
    var num = this.props.retdpg
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
    if (num >= 0.72) {
    	return (
	        <td style={highlightGreen}>
	          {this.props.retdpg}
	        </td>
     	)
    }
    if (num >= 0.54 && num < 0.72) {
    	return (
	        <td style={highlightLightGreen}>
	          {this.props.retdpg}
	        </td>
      	)
    }
    if (num < 0.54 && num > 0.36) {
    	return (
	        <td style={highlightLightNuetral}>
	          {this.props.retdpg}
	        </td>
      	)
    }
    if (num <= 0.36 && num > 0.18) {
      	return (
	        <td style={highlightLightRed}>
	          {this.props.retdpg}
	        </td>
      	)
    }
    if (num <= 0.18) {
     	return (
	        <td style={highlightRed}>
	          {this.props.retdpg}
	        </td>
     	)
    }
    else {
    	return (
	      	<td>
	          {this.props.retdpg}
	        </td>
    	)
    }
	}
})

var RZTarPerGame = React.createClass({
  render: function() {
    var num = this.props.rztarpg
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
    if (num >= 1.44) {
    	return (
	        <td style={highlightGreen}>
	          {this.props.rztarpg}
	        </td>
     	)
    }
    if (num >= 1.08 && num < 1.44) {
    	return (
	        <td style={highlightLightGreen}>
	          {this.props.rztarpg}
	        </td>
      	)
    }
    if (num < 1.08 && num > 0.72) {
    	return (
	        <td style={highlightLightNuetral}>
	          {this.props.rztarpg}
	        </td>
      	)
    }
    if (num <= 0.72 && num > 0.36) {
      	return (
	        <td style={highlightLightRed}>
	          {this.props.rztarpg}
	        </td>
      	)
    }
    if (num <= 0.36) {
     	return (
	        <td style={highlightRed}>
	          {this.props.rztarpg}
	        </td>
     	)
    }
    else {
    	return (
	      	<td>
	          {this.props.rztarpg}
	        </td>
    	)
    }
	}
})

export default WRAnalyzer
