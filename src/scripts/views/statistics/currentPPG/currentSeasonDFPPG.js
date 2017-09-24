import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'
import ReactTooltip from 'react-tooltip'

var seasonDFData = require('../../../data.json').dfdata

var CurrentSeasonDFPPG = React.createClass({
  	render: function() {
  		// Hide DF table if DF Button is not active
  		if (this.props.showDFStats === false) {
    		return null
    	}
   		if (seasonDFData.length < 2) {
    		return (
    			<div className='no-data'>
    				<h4>There are currently no stats to display</h4>
            <p>
              Check back after the season has started<br />
              or select 'Last Season' above to view last season's stats.
            </p>
    			</div>
    		)
    	}
	    return (
	      	<div className='stat-container'>
				<div className='stat-table'>
			        <table id="complete">
						<Headers />
						<Body  data={seasonDFData}/>
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
    				<th><span id='th-pointer' data-tip="Games Played">GP</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Quarterback Sacks">SACK</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Field Goals Blocked">BLK</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Interceptions">INT</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Fumble Recoveries">FUMR</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Safeties">SFTY</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Defensive Touchdowns">DEFTD</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th><span id='th-pointer' data-tip="Kickoffs Returned for Touchdown">RETTD</span><i className="fa fa-caret-down" aria-hidden="true"></i></th>
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
				<td>{player.gp}</td>
				<td>{(player.sack/player.gp).toFixed(2)}</td>
				<td>{(player.blk/player.gp).toFixed(2)}</td>
				<td>{(player.int/player.gp).toFixed(2)}</td>
				<td>{(player.fumr/player.gp).toFixed(2)}</td>
				<td>{(player.sfty/player.gp).toFixed(2)}</td>
				<td>{(player.deftd/player.gp).toFixed(2)}</td>
				<td>{(player.rettd/player.gp).toFixed(2)}</td>
				<td>{(player.fpts/player.gp).toFixed(2)}</td>
              </tr>
            )
         })}
      </tbody>
    );
  }
})

export default CurrentSeasonDFPPG