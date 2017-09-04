import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'

var seasonTEData = require('../../../data.json').tedata

var CurrentSeasonTETotal = React.createClass({
  	render: function() {
  		var tableResponsive = {
	      overflowX:"auto"
    	}
    	if (this.props.showTEStats === false) {
    		return null
    	}
    	if (seasonTEData.length < 2) {
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
				<div className='stat-table' style={tableResponsive}>
			        <table id="complete" className="tablesorter table table-condensed table-striped table-hover">
						<Headers />
						<Body data={seasonTEData} />
			        </table>
	      		</div>
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
				<th>TEAM<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>GP<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>TAR<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>REC<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>REYDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>REYPC<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RETDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RUATT<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RUYDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RUYPC<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RUTDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>TCHS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>TYRDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>				
				<th>FPTS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
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

export default CurrentSeasonTETotal