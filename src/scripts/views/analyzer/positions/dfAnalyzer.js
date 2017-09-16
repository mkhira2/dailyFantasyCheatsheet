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

var DFAnalyzer = React.createClass({
  	render: function() {
    	if (this.props.showDFCheat === false) {
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
						<Body dfData = {this.props.dfData}/>
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
	        	<th id='widen-th' className='headercol' ><span id='th-pointer' data-tip="Team Name">TEAM</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Opponent">OPP</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
            <th id="shrink-th"><span id='th-pointer' data-tip="Slate">SLT</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="DraftKings Salary">SAL</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="DraftKings Fantasy<br>Points Per Game">FPPG</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Projection">PROJ</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
            <th><span id='th-pointer' data-tip="Fantasy Points Target differential">FP/DIF</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="H-Value<br>(by Footballguys)">H-VAL</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th id='break'><span id='th-pointer' data-tip="Vegas Line">LINE</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Vegas Game Total">G/TL</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Vegas Team Total">T/TL</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th id='break'><span id='th-pointer' data-tip="Defensive<br>Touchdowns">DEF/TD</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Interceptions">INTS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Fumble Recoveries">FUM REC</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Sacks">SACKS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
            <th><span id='th-pointer' data-tip="Kick Return<br>Touchdowns">RET/TD</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
	        </tr>
      	</thead>
    )
  }
})

var Body = React.createClass({
  render: function() {
    return (
      <tbody>
        {this.props.dfData.map(function(player, i) {
            return (
              <tr key={i}>
                <td id='align-left' className='firstcol'>{player.player}</td>
        				<td>{player.opp}</td>
                <Day day={player.day}/>
                <Salary salary={numeral(player.salary).format('0,000')}/>
                <FPPG fppg={numeral(player.fppg).format('0.00')}/>
                <Proj proj={numeral(player.proj).format('0.00')}/>
                <td>{player.tar}</td>
                <HValue hValue={numeral(player.hValue).format('0.00')}/>
                <Line line={player.line}/>
                <GameTotal gameTotal={player.gameTotal}/>
        				<TeamTotal teamTotal={player.teamTotal}/>
        				<DefTds deftd={numeral(player.deftd).format('0')} />
        				<Ints int={numeral(player.int).format('0')} />
        				<Fumr fumr={numeral(player.fumr).format('0')} />
        				<Sack sack={numeral(player.sack).format('0')} />
                <RetTD rettd={numeral(player.rettd).format('0')} />
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
	    if (num >= '3,520') {
	    	return (
		        <td style={highlightRed}>
		          ${this.props.salary}
		        </td>
	     	)
	    }
	    if (num >= '3,140' && num < '3,520') {
	    	return (
		        <td style={highlightLightRed}>
		          ${this.props.salary}
		        </td>
	      	)
	    }
	    if (num < '3,140' && num > '2,760') {
	    	return (
		        <td style={highlightLightNuetral}>
		          ${this.props.salary}
		        </td>
	      	)
	    }
	    if (num <= '2,760' && num > '2,380') {
	      	return (
		        <td style={highlightLightGreen}>
		          ${this.props.salary}
		        </td>
	      	)
	    }
	    if (num <= '2,380' && num > '1') {
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
	    if (num >= 7.2) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.fppg}
		        </td>
	     	)
	    }
	    if (num >= 5.4 && num < 7.2) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.fppg}
		        </td>
	      	)
	    }
	    if (num < 5.4 && num > 3.6) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.fppg}
		        </td>
	      	)
	    }
	    if (num <= 3.6 && num > 1.8) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.fppg}
		        </td>
	      	)
	    }
	    if (num <= 1.8) {
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
	    if (num >= 7.2) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.proj}
		        </td>
	     	)
	    }
	    if (num >= 5.4 && num < 7.2) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.proj}
		        </td>
	      	)
	    }
	    if (num < 5.4 && num > 3.6) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.proj}
		        </td>
	      	)
	    }
	    if (num <= 3.6 && num > 1.8) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.proj}
		        </td>
	      	)
	    }
	    if (num <= 1.8) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.proj}
		        </td>
	     	)
	    }
	    else {
	    	return (
		        <td>
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
	    if (num <= 6 && num >= 2) {
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

var DefTds = React.createClass({
  	render: function() {
    	var num = this.props.deftd
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
	    if (num >= 4.8) {
	    	return (
		        <td style={highlightGreen} id='break'>
		          {this.props.deftd}
		        </td>
	     	)
	    }
	    if (num >= 3.6 && num < 4.8) {
	    	return (
		        <td style={highlightLightGreen} id='break'>
		          {this.props.deftd}
		        </td>
	      	)
	    }
	    if (num < 3.6 && num > 2.4) {
	    	return (
		        <td style={highlightLightNuetral} id='break'>
		          {this.props.deftd}
		        </td>
	      	)
	    }
	    if (num <= 2.4 && num > 1.2) {
	      	return (
		        <td style={highlightLightRed} id='break'>
		          {this.props.deftd}
		        </td>
	      	)
	    }
	    if (num <= 1.2) {
	     	return (
		        <td style={highlightRed} id='break'>
		          {this.props.deftd}
		        </td>
	     	)
	    }
	    else {
	    	return (
		      	<td id='break'>
		          {this.props.deftd}
		        </td>
	    	)
	    }
	}
})

var Ints = React.createClass({
  	render: function() {
    	var num = this.props.int
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
	    if (num >= 17) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.int}
		        </td>
	     	)
	    }
	    if (num >= 14 && num < 17) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.int}
		        </td>
	      	)
	    }
	    if (num < 14 && num > 11) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.int}
		        </td>
	      	)
	    }
	    if (num <= 11 && num > 8) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.int}
		        </td>
	      	)
	    }
	    if (num <= 8) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.int}
		        </td>
	     	)
	    }
	    else {
	    	return (
		      	<td>
		          {this.props.int}
		        </td>
	    	)
	    }
	}
})

var Fumr = React.createClass({
  	render: function() {
    	var num = this.props.fumr
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
	    if (num >= 9.6) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.fumr}
		        </td>
	     	)
	    }
	    if (num >= 7.2 && num < 9.6) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.fumr}
		        </td>
	      	)
	    }
	    if (num < 7.2 && num > 4.8) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.fumr}
		        </td>
	      	)
	    }
	    if (num <= 4.8 && num > 2.4) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.fumr}
		        </td>
	      	)
	    }
	    if (num <= 2.4) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.fumr}
		        </td>
	     	)
	    }
	    else {
	    	return (
		      	<td>
		          {this.props.fumr}
		        </td>
	    	)
	    }
	}
})

var Sack = React.createClass({
  	render: function() {
    	var num = this.props.sack
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
	    if (num >= 44) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.sack}
		        </td>
	     	)
	    }
	    if (num >= 38 && num < 44) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.sack}
		        </td>
	      	)
	    }
	    if (num < 38 && num > 32) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.sack}
		        </td>
	      	)
	    }
	    if (num <= 32 && num > 26) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.sack}
		        </td>
	      	)
	    }
	    if (num <= 26) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.sack}
		        </td>
	     	)
	    }
	    else {
	    	return (
		      	<td>
		          {this.props.sack}
		        </td>
	    	)
	    }
	}
})

var RetTD = React.createClass({
  	render: function() {
    	var num = this.props.rettd
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
	    if (num >= 2.4) {
	    	return (
		        <td style={highlightGreen}>
		          {this.props.rettd}
		        </td>
	     	)
	    }
	    if (num >= 1.8 && num < 2.4) {
	    	return (
		        <td style={highlightLightGreen}>
		          {this.props.rettd}
		        </td>
	      	)
	    }
	    if (num < 1.8 && num > 1.2) {
	    	return (
		        <td style={highlightLightNuetral}>
		          {this.props.rettd}
		        </td>
	      	)
	    }
	    if (num <= 1.2 && num > 0.6) {
	      	return (
		        <td style={highlightLightRed}>
		          {this.props.rettd}
		        </td>
	      	)
	    }
	    if (num <= 0.6) {
	     	return (
		        <td style={highlightRed}>
		          {this.props.rettd}
		        </td>
	     	)
	    }
	    else {
	    	return (
		      	<td>
		          {this.props.rettd}
		        </td>
	    	)
	    }
	}
})

export default DFAnalyzer
