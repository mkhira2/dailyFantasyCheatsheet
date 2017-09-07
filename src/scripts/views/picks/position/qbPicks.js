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

var QBpicks = React.createClass({
	render: function() {
    if (this.props.showQBPicks === false) {
      return null
    }
		return (
			<div className='stat-container'>
				<div className="notes">
					<LastUpdated />
		        </div>
				<div className='stat-table' >
			    <table id="complete" className="tablesorter">
						<Headers />
						<Body qbPicks={ACTIONS.qbPicks(this.props.qbData)} />
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
	render: function() {
		return (
			<thead className='stat-container'>
        <tr>
          <th id='widen-th' className='headercol'><span id='th-pointer' data-tip="Player Name">PLAYER</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          <th id='widen-th'><span id='th-pointer' data-tip="Team Name">TEAM</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          <th><span id='th-pointer' data-tip="Opponent">OPP</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          <th id='shrink-th'><span id='th-pointer' data-tip="Injuries">INJ</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          <th><span id='th-pointer' data-tip="DraftKings Salary">SAL</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          <th id='break'><span id='th-pointer' data-tip="Projection">PROJ</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th><span id='th-pointer' data-tip="Ownage %<br>(by Rotowire)">OWN</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th id='break'><span id='th-pointer' data-tip="Vegas Line">LINE</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th><span id='th-pointer' data-tip="Vegas Team Total">T/TL</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th className='notice' id='break'><span id='th-pointer' data-tip="Defense Vs. QB Grade<br>(Based on Fantasy Points<br>Against Position)">DvQB</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th className='notice'><span id='th-pointer' data-tip="Pass Defense DVOA<br>(by Fantasy Outsiders)<br><br>*2016 Rating<br>Will be update after<br>Week 4">DVOA</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th id='break' className='notice'><span id='th-pointer' data-tip="Total Touchdowns<br>Per Game">TD/G</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th className='notice'><span id='th-pointer' data-tip="Passing Touchdowns<br>Per Game">PTD/G</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th className='notice'><span id='th-pointer' data-tip="Touchdowns<br>Per Attempt">TD%</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        </tr>
	    </thead>
	  )
	}
})

var Body = React.createClass({
	render: function() {
		return (
			<tbody >
        {this.props.qbPicks.map(function(player, i) {
            var currency = player.salary
            var salary = Number(currency.replace(/[^0-9\.-]+/g,""))
            return (
              <tr key={i}>
                <td id='align-left' className='firstcol'>{player.player}</td>
                <td>{player.teamAbb}</td>
                <td>{player.opp}</td>
                <td>{player.injury}</td>
                <td>{player.salary}</td>
                <td>{player.proj}</td>
                <td>{numeral(player.own).format('0.0')}%</td>
                <td>{(player.line)}</td>
                <td>{(player.teamTotal)}</td>
                <td>{(player.matchup)}</td>
                <td>{(player.dvoa_pass_rank)}</td>
                <td>{numeral(player.ttltdpg).format('0.00')}</td>
        				<td>{numeral(player.patdpg).format('0.00')}</td>
        				<td>{numeral(player.tdpct*100).format('0.00')}</td>
              </tr>
            )
         })}
	    </tbody>
	  )
	}
})


// var Headers = React.createClass({
//   componentDidMount: function() {
//     $("#complete").tablesorter();
//   },
//   render: function () {
//     return (
//       	<thead>
// 	        <tr>
// 				<th id='widen-th' className='headercol'>PLAYER <span data-tip="Player Name"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th id='widen-th'>TEAM <span data-tip="Team Name"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th>OPP <span data-tip="Opponent"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th>DK SALARY <span data-tip="DraftKings Salary"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th>FPPG <span data-tip="DraftKings Fantasy<br>Points Per Game"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th>PROJ <span data-tip="Projection"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th>VALUE <span data-tip="H-Value<br>(by Footballguys)"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th id='break'>LINE <span data-tip="Vegas Line"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th>GM TOTAL <span data-tip="Vegas Game Total"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th>TM TOTAL <span data-tip="Vegas Team Total"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th className='notice'id='break'>DvQB <span data-tip="Defense Vs. QB Grade<br>(Based on Fantasy Points<br>Against Position)"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th className='notice'>P DVOA <span data-tip="Pass Defense DVOA<br>(by Fantasy Outsiders)<br><br>*2016 Rating<br>Will be update after<br>Week 4"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th id='break' className='notice'>TTL TD/G <span data-tip="Total Touchdowns<br>Per Game"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th className='notice'>P TD/G <span data-tip="Passing Touchdowns<br>Per Game"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th className='notice'>TD % <span data-tip="Touchdowns<br>Per Attempt"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th className='notice'>TTL YDS/G <span data-tip="Total Yards<br>Per Game"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th className='notice'>P RATING <span data-tip="Passer Rating"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th className='notice'>P YDS/G <span data-tip="Passing Yards<br>Per Game"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 				<th className='notice'>YDS/ATT <span data-tip="Yards Per Attempt"><i className="fa fa-info-circle" aria-hidden="true"></i></span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
// 	        </tr>
//       	</thead>
//
//
//     )
//   }
// })
//
// var Body = React.createClass({
//   render: function() {
//     console.log(this.props.qbData);
//     return (
//       <tbody>
//         {this.props.qbData.map(function(player, i) {
//             return (
//               <tr key={i}>
//                 <td id='align-left' className='firstcol'>{player.player}</td>
// 				<td id='align-left'>{player.team}</td>
// 				<td>{player.opp}</td>
//         <Salary salary={numeral(player.salary).format('0,000')}/>
// 				<FPPG fppg={numeral(player.fppg).format('0.00')}/>
// 				<td></td>
// 				<td></td>
// 				<td>{player.line}</td>
// 				<td>{player.gameTotal}</td>
// 				<TeamTotal teamTotal={player.teamTotal}/>
// 				<Matchup matchup={player.matchup}/>
// 				<td>Coming Soon</td>
// 				<TotalTdPerGame ttltdpg={numeral(player.ttltdpg).format('0.00')}/>
// 				<PassTdPerGame patdpg={numeral(player.patdpg).format('0.00')}/>
// 				<TdPercent tdpct={numeral(player.tdpct*100).format('0.00')} />
// 				<TotalYdsPerGame ttlydspg={numeral(player.ttlydspg).format('0.00')} />
// 				<PassRate prate={numeral(player.prate).format('0.0')} />
// 				<PassYdsPerGame paydspg={numeral(player.paydspg).format('0.00')} />
// 				<YdsPerAtt ydspatt={numeral(player.ydspatt).format('0.00')} />
//               </tr>
//             )
//          })}
//       </tbody>
//     );
//   }
// })
//
// var Salary = React.createClass({
//   	render: function() {
//     	var num = this.props.salary
// 	    var highlightGreen = {
// 	      backgroundColor: "#58b670",
// 	    }
// 	    var highlightLightGreen = {
// 	      backgroundColor: "#add075",
// 	    }
// 	    var highlightLightNuetral = {
// 	      backgroundColor: "#ffff99",
// 	    }
// 	    var highlightLightRed = {
// 	      backgroundColor: "#f98567",
// 	    }
// 	    var highlightRed = {
// 	      backgroundColor: "#F75E60",
// 	    }
// 	    var highlightWhite = {
// 	      color: "#fff",
// 	    }
// 	    if (num >= '9,100') {
// 	    	return (
// 		        <td style={highlightRed}>
// 		          ${this.props.salary}
// 		        </td>
// 	     	)
// 	    }
// 	    if (num >= '8,000' && num < '9,100') {
// 	    	return (
// 		        <td style={highlightLightRed}>
// 		          ${this.props.salary}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num < '8,000' && num > '7,100') {
// 	    	return (
// 		        <td style={highlightLightNuetral}>
// 		          ${this.props.salary}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num <= '7,100' && num > '6,100') {
// 	      	return (
// 		        <td style={highlightLightGreen}>
// 		          ${this.props.salary}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num <= '6,100' && num > '1') {
// 	     	return (
// 		        <td style={highlightGreen}>
// 		          ${this.props.salary}
// 		        </td>
// 	     	)
// 	    }
// 	    else {
// 	    	return (
// 		        <td style={highlightWhite}>
// 		          ${this.props.salary}
// 		        </td>
// 	    	)
// 	    }
// 	}
// })
//
// var FPPG = React.createClass({
//   	render: function() {
//     	var num = this.props.fppg
// 	    var highlightGreen = {
// 	      backgroundColor: "#58b670",
// 	    }
// 	    var highlightLightGreen = {
// 	      backgroundColor: "#add075",
// 	    }
// 	    var highlightLightNuetral = {
// 	      backgroundColor: "#ffff99",
// 	    }
// 	    var highlightLightRed = {
// 	      backgroundColor: "#f98567",
// 	    }
// 	    var highlightRed = {
// 	      backgroundColor: "#F75E60",
// 	    }
// 	    if (num >= 20) {
// 	    	return (
// 		        <td style={highlightGreen}>
// 		          {this.props.fppg}
// 		        </td>
// 	     	)
// 	    }
// 	    if (num >= 15 && num < 20) {
// 	    	return (
// 		        <td style={highlightLightGreen}>
// 		          {this.props.fppg}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num < 15 && num > 10) {
// 	    	return (
// 		        <td style={highlightLightNuetral}>
// 		          {this.props.fppg}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num <= 10 && num > 5) {
// 	      	return (
// 		        <td style={highlightLightRed}>
// 		          {this.props.fppg}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num <= 5) {
// 	     	return (
// 		        <td style={highlightRed}>
// 		          {this.props.fppg}
// 		        </td>
// 	     	)
// 	    }
// 	    else {
// 	    	return (
// 		        <td>
// 		          {this.props.fppg}
// 		        </td>
// 	    	)
// 	    }
// 	}
// })
//
// var GameTotal = React.createClass({
//   	render: function() {
//     	var num = this.props.gameTotal
// 	    var highlightGreen = {
// 	      backgroundColor: "#58b670",
// 	    }
// 	    var highlightLightGreen = {
// 	      backgroundColor: "#add075",
// 	    }
// 	    var highlightLightNuetral = {
// 	      backgroundColor: "#ffff99",
// 	    }
// 	    var highlightLightRed = {
// 	      backgroundColor: "#f98567",
// 	    }
// 	    var highlightRed = {
// 	      backgroundColor: "#F75E60",
// 	    }
// 	    if (num >= 52) {
// 	    	return (
// 		        <td style={highlightGreen}>
// 		          {this.props.gameTotal}
// 		        </td>
// 	     	)
// 	    }
// 	    if (num >= 48 && num < 52) {
// 	    	return (
// 		        <td style={highlightLightGreen}>
// 		          {this.props.gameTotal}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num < 48 && num > 44) {
// 	    	return (
// 		        <td style={highlightLightNuetral}>
// 		          {this.props.gameTotal}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num <= 44 && num > 40) {
// 	      	return (
// 		        <td style={highlightLightRed}>
// 		          {this.props.gameTotal}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num <= 40) {
// 	     	return (
// 		        <td style={highlightRed}>
// 		          {this.props.gameTotal}
// 		        </td>
// 	     	)
// 	    }
// 	    else {
// 	    	return (
// 		        <td>
// 		          {this.props.gameTotal}
// 		        </td>
// 	    	)
// 	    }
// 	}
// })
//
// var TeamTotal = React.createClass({
//   	render: function() {
//     	var num = this.props.teamTotal
// 	    var highlightGreen = {
// 	      backgroundColor: "#58b670",
// 	    }
// 	    var highlightLightGreen = {
// 	      backgroundColor: "#add075",
// 	    }
// 	    var highlightLightNuetral = {
// 	      backgroundColor: "#ffff99",
// 	    }
// 	    var highlightLightRed = {
// 	      backgroundColor: "#f98567",
// 	    }
// 	    var highlightRed = {
// 	      backgroundColor: "#F75E60",
// 	    }
//
// 	    if (num >= 28) {
// 	    	return (
// 		        <td style={highlightGreen} id='break'>
// 		          {this.props.teamTotal}
// 		        </td>
// 	     	)
// 	    }
// 	    if (num >= 24 && num < 28) {
// 	    	return (
// 		        <td style={highlightLightGreen} id='break'>
// 		          {this.props.teamTotal}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num < 24 && num > 22) {
// 	    	return (
// 		        <td style={highlightLightNuetral} id='break'>
// 		          {this.props.teamTotal}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num <= 22 && num > 20) {
// 	      	return (
// 		        <td style={highlightLightRed} id='break'>
// 		          {this.props.teamTotal}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num <= 20) {
// 	     	return (
// 		        <td style={highlightRed} id='break'>
// 		          {this.props.teamTotal}
// 		        </td>
// 	     	)
// 	    }
// 	    else {
// 	    	return (
// 		      	<td id='break'>
// 		          {this.props.teamTotal}
// 		        </td>
// 	    	)
// 	    }
// 	}
// })
//
// var Matchup = React.createClass({
//   	render: function() {
//     	var num = this.props.matchup
// 	    var highlightGreen = {
// 	      backgroundColor: "#58b670",
// 	    }
// 	    var highlightLightGreen = {
// 	      backgroundColor: "#add075",
// 	    }
// 	    var highlightLightNuetral = {
// 	      backgroundColor: "#ffff99",
// 	    }
// 	    var highlightLightRed = {
// 	      backgroundColor: "#f98567",
// 	    }
// 	    var highlightRed = {
// 	      backgroundColor: "#F75E60",
// 	    }
// 	    var highlightWhite = {
// 	      color: "#fff",
// 	    }
//
// 	    if (num === "F") {
// 	    	return (
// 		        <td style={highlightRed} id='break'>
// 		          {this.props.matchup}
// 		        </td>
// 	     	)
// 	    }
// 	    if (num === "D") {
// 	    	return (
// 		        <td style={highlightLightRed} id='break'>
// 		          {this.props.matchup}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num === "C") {
// 	    	return (
// 		        <td style={highlightLightNuetral} id='break'>
// 		          {this.props.matchup}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num === "B") {
// 	      	return (
// 		        <td style={highlightLightGreen} id='break'>
// 		          {this.props.matchup}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num === "A") {
// 	     	return (
// 		        <td style={highlightGreen} id='break'>
// 		          {this.props.matchup}
// 		        </td>
// 	     	)
// 	    }
// 	    if (num === " ") {
// 	     	return (
// 		        <td style={highlightWhite} id='break'>
// 		          {this.props.matchup}
// 		        </td>
// 	     	)
// 	    }
// 	}
// })
//
// var TotalTdPerGame = React.createClass({
//   	render: function() {
//     	var num = this.props.ttltdpg
// 	    var highlightGreen = {
// 	      backgroundColor: "#58b670",
// 	    }
// 	    var highlightLightGreen = {
// 	      backgroundColor: "#add075",
// 	    }
// 	    var highlightLightNuetral = {
// 	      backgroundColor: "#ffff99",
// 	    }
// 	    var highlightLightRed = {
// 	      backgroundColor: "#f98567",
// 	    }
// 	    var highlightRed = {
// 	      backgroundColor: "#F75E60",
// 	    }
// 	    var highlightWhite = {
// 	      color: "#fff",
// 	    }
//
// 	    if (num >= 2.25) {
// 	    	return (
// 		        <td style={highlightGreen} id='break'>
// 		          {this.props.ttltdpg}
// 		        </td>
// 	     	)
// 	    }
// 	    if (num >= 1.75 && num < 2.25) {
// 	    	return (
// 		        <td style={highlightLightGreen} id='break'>
// 		          {this.props.ttltdpg}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num < 1.75 && num > 1.25) {
// 	    	return (
// 		        <td style={highlightLightNuetral} id='break'>
// 		          {this.props.ttltdpg}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num <= 1.25 && num > 0.5) {
// 	      	return (
// 		        <td style={highlightLightRed} id='break'>
// 		          {this.props.ttltdpg}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num <= 0.5) {
// 	     	return (
// 		        <td style={highlightRed} id='break'>
// 		          {this.props.ttltdpg}
// 		        </td>
// 	     	)
// 	    }
// 	}
// })
//
// var PassTdPerGame = React.createClass({
//   render: function() {
//     var num = this.props.patdpg
//     var highlightGreen = {
//       backgroundColor: "#58b670",
//     }
//     var highlightLightGreen = {
//       backgroundColor: "#add075",
//     }
//     var highlightLightNuetral = {
//       backgroundColor: "#ffff99",
//     }
//     var highlightLightRed = {
//       backgroundColor: "#f98567",
//     }
//     var highlightRed = {
//       backgroundColor: "#F75E60",
//     }
//     var highlightWhite = {
//       color: "#fff",
//     }
//
//     if (num >= 2.4) {
//       return (
//           <td style={highlightGreen}>
//             {this.props.patdpg}
//           </td>
//       )
//     }
//     if (num >= 1.8 && num < 2.4) {
//       return (
//           <td style={highlightLightGreen}>
//             {this.props.patdpg}
//           </td>
//         )
//     }
//     if (num < 1.8 && num > 1.2) {
//       return (
//           <td style={highlightLightNuetral}>
//             {this.props.patdpg}
//           </td>
//         )
//     }
//     if (num <= 1.2 && num > 0.6) {
//         return (
//           <td style={highlightLightRed}>
//             {this.props.patdpg}
//           </td>
//         )
//     }
//     if (num <= 0.6) {
//       return (
//           <td style={highlightRed}>
//             {this.props.patdpg}
//           </td>
//       )
//     }
//   }
// })
//
// var TdPercent = React.createClass({
//   	render: function() {
//     	var num = this.props.tdpct
// 	    var highlightGreen = {
// 	      backgroundColor: "#58b670",
// 	    }
// 	    var highlightLightGreen = {
// 	      backgroundColor: "#add075",
// 	    }
// 	    var highlightLightNuetral = {
// 	      backgroundColor: "#ffff99",
// 	    }
// 	    var highlightLightRed = {
// 	      backgroundColor: "#f98567",
// 	    }
// 	    var highlightRed = {
// 	      backgroundColor: "#F75E60",
// 	    }
// 	    var highlightWhite = {
// 	      color: "#fff",
// 	    }
//
// 	    if (num >= 10) {
// 	    	return (
// 		        <td style={highlightGreen}>
// 		          {this.props.tdpct}
// 		        </td>
// 	     	)
// 	    }
// 	    if (num >= 8 && num < 10) {
// 	    	return (
// 		        <td style={highlightLightGreen}>
// 		          {this.props.tdpct}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num < 8 && num > 6.5) {
// 	    	return (
// 		        <td style={highlightLightNuetral}>
// 		          {this.props.tdpct}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num <= 6.5 && num > 5) {
// 	      	return (
// 		        <td style={highlightLightRed}>
// 		          {this.props.tdpct}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num <= 5) {
// 	     	return (
// 		        <td style={highlightRed}>
// 		          {this.props.tdpct}
// 		        </td>
// 	     	)
// 	    }
// 	}
// })
//
// var TotalYdsPerGame = React.createClass({
//   	render: function() {
//     	var num = this.props.ttlydspg
// 	    var highlightGreen = {
// 	      backgroundColor: "#58b670",
// 	    }
// 	    var highlightLightGreen = {
// 	      backgroundColor: "#add075",
// 	    }
// 	    var highlightLightNuetral = {
// 	      backgroundColor: "#ffff99",
// 	    }
// 	    var highlightLightRed = {
// 	      backgroundColor: "#f98567",
// 	    }
// 	    var highlightRed = {
// 	      backgroundColor: "#F75E60",
// 	    }
// 	    var highlightWhite = {
// 	      color: "#fff",
// 	    }
//
// 	    if (num >= 300) {
// 	    	return (
// 		        <td style={highlightGreen}>
// 		          {this.props.ttlydspg}
// 		        </td>
// 	     	)
// 	    }
// 	    if (num >= 225 && num < 300) {
// 	    	return (
// 		        <td style={highlightLightGreen}>
// 		          {this.props.ttlydspg}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num < 225 && num > 175) {
// 	    	return (
// 		        <td style={highlightLightNuetral}>
// 		          {this.props.ttlydspg}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num <= 175 && num > 100) {
// 	      	return (
// 		        <td style={highlightLightRed}>
// 		          {this.props.ttlydspg}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num <= 100) {
// 	     	return (
// 		        <td style={highlightRed}>
// 		          {this.props.ttlydspg}
// 		        </td>
// 	     	)
// 	    }
// 	}
// })
//
// var PassRate = React.createClass({
//   render: function() {
//     var num = this.props.prate
//     var highlightGreen = {
//       backgroundColor: "#58b670",
//     }
//     var highlightLightGreen = {
//       backgroundColor: "#add075",
//     }
//     var highlightLightNuetral = {
//       backgroundColor: "#ffff99",
//     }
//     var highlightLightRed = {
//       backgroundColor: "#f98567",
//     }
//     var highlightRed = {
//       backgroundColor: "#F75E60",
//     }
//     var highlightWhite = {
//       color: "#fff",
//     }
//
//     if (num >= 128) {
//       return (
//           <td style={highlightGreen} >
//             {this.props.prate}
//           </td>
//       )
//     }
//     if (num >= 96 && num < 128) {
//       return (
//           <td style={highlightLightGreen} >
//             {this.props.prate}
//           </td>
//         )
//     }
//     if (num < 96 && num > 64) {
//       return (
//           <td style={highlightLightNuetral} >
//             {this.props.prate}
//           </td>
//         )
//     }
//     if (num <= 64 && num > 32) {
//         return (
//           <td style={highlightLightRed} >
//             {this.props.prate}
//           </td>
//         )
//     }
//     if (num <= 32) {
//       return (
//           <td style={highlightRed} >
//             {this.props.prate}
//           </td>
//       )
//     }
//   }
// })
//
// var PassYdsPerGame = React.createClass({
//   render: function() {
//     var num = this.props.paydspg
//     var highlightGreen = {
//       backgroundColor: "#58b670",
//     }
//     var highlightLightGreen = {
//       backgroundColor: "#add075",
//     }
//     var highlightLightNuetral = {
//       backgroundColor: "#ffff99",
//     }
//     var highlightLightRed = {
//       backgroundColor: "#f98567",
//     }
//     var highlightRed = {
//       backgroundColor: "#F75E60",
//     }
//     var highlightWhite = {
//       color: "#fff",
//     }
//
//     if (num >= 240) {
//       return (
//           <td style={highlightGreen} >
//             {this.props.paydspg}
//           </td>
//       )
//     }
//     if (num >= 180 && num < 240) {
//       return (
//           <td style={highlightLightGreen} >
//             {this.props.paydspg}
//           </td>
//         )
//     }
//     if (num < 180 && num > 120) {
//       return (
//           <td style={highlightLightNuetral} >
//             {this.props.paydspg}
//           </td>
//         )
//     }
//     if (num <= 120 && num > 60) {
//         return (
//           <td style={highlightLightRed} >
//             {this.props.paydspg}
//           </td>
//         )
//     }
//     if (num <= 60) {
//       return (
//           <td style={highlightRed} >
//             {this.props.paydspg}
//           </td>
//       )
//     }
//   }
// })
//
// var YdsPerAtt = React.createClass({
//   	render: function() {
//     	var num = this.props.ydspatt
// 	    var highlightGreen = {
// 	      backgroundColor: "#58b670",
// 	    }
// 	    var highlightLightGreen = {
// 	      backgroundColor: "#add075",
// 	    }
// 	    var highlightLightNuetral = {
// 	      backgroundColor: "#ffff99",
// 	    }
// 	    var highlightLightRed = {
// 	      backgroundColor: "#f98567",
// 	    }
// 	    var highlightRed = {
// 	      backgroundColor: "#F75E60",
// 	    }
// 	    var highlightWhite = {
// 	      color: "#fff",
// 	    }
//
// 	    if (num >= 8) {
// 	    	return (
// 		        <td style={highlightGreen}>
// 		          {this.props.ydspatt}
// 		        </td>
// 	     	)
// 	    }
// 	    if (num >= 7 && num < 8) {
// 	    	return (
// 		        <td style={highlightLightGreen}>
// 		          {this.props.ydspatt}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num < 7 && num > 6) {
// 	    	return (
// 		        <td style={highlightLightNuetral}>
// 		          {this.props.ydspatt}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num <= 6 && num > 5) {
// 	      	return (
// 		        <td style={highlightLightRed}>
// 		          {this.props.ydspatt}
// 		        </td>
// 	      	)
// 	    }
// 	    if (num <= 5) {
// 	     	return (
// 		        <td style={highlightRed}>
// 		          {this.props.ydspatt}
// 		        </td>
// 	     	)
// 	    }
// 	}
// })

export default QBpicks
