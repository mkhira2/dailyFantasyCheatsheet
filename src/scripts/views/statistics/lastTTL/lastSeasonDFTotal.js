import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'
import ReactTooltip from 'react-tooltip'

var seasonDFData = require('../../../data.json').lastSeasonDFdata

var LastSeasonDFTotal = React.createClass({
  	render: function() {
  		var tableResponsive = {
	      overflowX:"auto"
    	}
    	if (this.props.showDFStats === false) {
    		return null
    	}
	    return (
	      	<div className='stat-container'>
				<div className='stat-table' style={tableResponsive}>
			        <table id="complete" className="tablesorter table table-condensed table-striped table-hover">
						<Headers />
						<Body data={seasonDFData} />
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
				<td>{player.sack}</td>
				<td>{player.blk}</td>
				<td>{player.int}</td>
				<td>{player.fumr}</td>
				<td>{player.sfty}</td>
				<td>{player.deftd}</td>
				<td>{player.rettd}</td>
				<td>{player.fpts}</td>
              	</tr>
            )
         })}
      </tbody>
    );
  }
})

export default LastSeasonDFTotal