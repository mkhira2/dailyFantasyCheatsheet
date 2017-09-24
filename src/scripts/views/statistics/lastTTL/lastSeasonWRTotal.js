import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'
import ReactTooltip from 'react-tooltip'

var seasonWRData = require('../../../data.json').lastSeasonWRdata

var LastSeasonWRTotal = React.createClass({
  	render: function() {
  		// Hide WR table if WR Button is not active
  		if (this.props.showWRStats === false) {
    		return null
    	}
	    return (
	      	<div className='stat-container'>
				<div className='stat-table'>
			        <table id="complete">
						<Headers />
						<Body  data={seasonWRData}/>
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
				<th id='widen-th'><span id='th-pointer' data-tip="Player Name">PLAYER</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Team Name">TEAM</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Games Played">GP</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Targets">TAR</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Receptions">REC</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Receiving Yards">REYDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Receiving Yards Per Carry">REYPC</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Receiving Touchdowns">RETDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Rushing Attempts">RUATT</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Rushing Yards">RUYDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Rushing Yards Per Carry">RUYPC</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Rushing Touchdowns">RUTDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Total Touches">TCHS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th><span id='th-pointer' data-tip="Total Yards">TYRDS</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>				
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
				<td>{player.tar}</td>
				<td>{player.rec}</td>
				<td>{player.reyds}</td>
				<td>{player.reypc}</td>
				<td>{player.retd}</td>
				<td>{player.ruatt}</td>
				<td>{player.ruyds}</td>
				<td>{player.ruypc}</td>
				<td>{player.rutd}</td>
				<td>{player.tchs}</td>
				<td>{player.tyds}</td>
				<td>{player.fpts}</td>
              </tr>
            )
         })}
      </tbody>
    );
  }
})

export default LastSeasonWRTotal