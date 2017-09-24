import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'
import ReactTooltip from 'react-tooltip'

var seasonQBData = require('../../../data.json').lastSeasonQBdata

var LastSeasonQBPPG = React.createClass({
  	render: function() {
  		// Hide QB table if QB Button is not active
  		if (this.props.showQBStats === false) {
    		return null
    	}
	    return (
	      	<div className='stat-container'>
				<div className='stat-table'>
			        <table id="complete">
						<Headers />
						<Body  data={seasonQBData}/>
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
				<th id='widen-th'>PLAYER<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Team Name">TEAM</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Games Played">GP</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Attempted Passes">ATT</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Completed Passes">CMP</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Completed Passes %">PCT</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Total Yards">YDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th><span id='th-pointer' data-tip="Passing Touchdowns">TDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Interceptions">INTS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Rushing Attempts">RUATT</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Rushing Yards">RUYDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Rushing Touchdowns">RUTDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Fantasy Points">FPTS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
	        </tr>
      	</thead>
    )
  }
})

var Body = React.createClass({
  render: function() {
  	var preSortedData = this.props.data.sort(function(a,b){return b.fpts - a.fpts})
    return (
      <tbody>
        {preSortedData.map(function(player, i) {
            return (
              <tr key={i}>
                <td id='align-left'>{player.player}</td> 
				<td>{player.team}</td>
				<td>{player.gp}</td>
				<td>{(player.att/player.gp).toFixed(2)}</td>
				<td>{(player.cmp/player.gp).toFixed(2)}</td>
				<td>{player.pct}</td>
				<td>{(player.payds/player.gp).toFixed(2)}</td>
				<td>{(player.patd/player.gp).toFixed(2)}</td>
				<td>{(player.int/player.gp).toFixed(2)}</td>
				<td>{(player.ruatt/player.gp).toFixed(2)}</td>
				<td>{(player.ruyds/player.gp).toFixed(2)}</td>
				<td>{(player.rutd/player.gp).toFixed(2)}</td>
				<td>{(player.fpts/player.gp).toFixed(2)}</td>
              </tr>
            )
         })}
      </tbody>
    );
  }
})

export default LastSeasonQBPPG