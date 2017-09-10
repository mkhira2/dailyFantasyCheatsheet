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

var DFpicks = React.createClass({
	render: function() {
    if (this.props.showDFPicks === false) {
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
						<Body dfPicks={ACTIONS.dfPicks(this.props.dfData)} />
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
          <th><span id='th-pointer' data-tip="DraftKings Salary">SAL</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
          <th id='break'><span id='th-pointer' data-tip="Projection">PROJ</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th id='break'><span id='th-pointer' data-tip="Vegas Line">LINE</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th><span id='th-pointer' data-tip="Vegas Team Total">T/TL</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th className='notice' id='break'><span id='th-pointer' data-tip="Defensive<br>Touchdowns">DEF/TD</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th className='notice'><span id='th-pointer' data-tip="Interceptions">INTS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th className='notice'><span id='th-pointer' data-tip="Fumble Recoveries">FUM REC</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th className='notice'><span id='th-pointer' data-tip="Sacks">SACKS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
      <th className='notice'><span id='th-pointer' data-tip="Kick Return<br>Touchdowns">RET/TD</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
        </tr>
	    </thead>
	  )
	}
})

var Body = React.createClass({
	render: function() {
		return (
			<tbody >
        {this.props.dfPicks.map(function(player, i) {
            return (
              <tr key={i}>
                <td id='align-left' className='firstcol'>{player.player}</td>
                <td>{player.teamAbb}</td>
                <td>{player.opp}</td>
                <td>{player.salary}</td>
                <td>{player.proj}</td>
                <td>{(player.line)}</td>
                <td>{(player.teamTotal)}</td>
                <td>{numeral(player.deftd).format('0')}</td>
        				<td>{numeral(player.int).format('0')}</td>
        				<td>{numeral(player.fumr).format('0')}</td>
        				<td>{numeral(player.sack).format('0')}</td>
                <td>{numeral(player.rettd).format('0')}</td>
              </tr>
            )
         })}
	    </tbody>
	  )
	}
})


export default DFpicks
