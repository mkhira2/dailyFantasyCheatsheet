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

var TEpicks = React.createClass({
	render: function() {
    if (this.props.showTEPicks === false) {
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
						<Body tePicks={ACTIONS.tePicks(this.props.teData)} />
			    </table>
	      </div>
	      <ReactTooltip place="bottom" effect="solid" multiline={true} offset={{bottom: 20, right: 9}}/>
	    </div>
	  )
	}
})

var Headers = React.createClass({
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
      <th className='notice' id='break'><span id='th-pointer' data-tip="Receiving Yards<br>Per Game">ReYD/G </span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th className='notice' ><span id='th-pointer' data-tip="Targets<br>Per Game">TAR/G</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th className='notice' ><span id='th-pointer' data-tip="Receptions<br>Per Game">REC/G</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        </tr>
	    </thead>
	  )
	}
})

var Body = React.createClass({
	render: function() {
		return (
			<tbody >
        {this.props.tePicks.map(function(player, i) {
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
                <td>{numeral(player.recydspg).format('0.00')}</td>
        				<td>{numeral(player.tarpg).format('0.00')}</td>
        				<td>{numeral(player.recpg).format('0.00')}</td>
              </tr>
            )
         })}
	    </tbody>
	  )
	}
})


export default TEpicks
