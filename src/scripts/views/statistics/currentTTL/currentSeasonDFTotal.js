import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'

var seasonDFData = require('../../../data.json').dfdata

var CurrentSeasonDFTotal = React.createClass({
  	render: function() {
  		var tableResponsive = {
	      overflowX:"auto"
    	}
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
				<div className='stat-table' style={tableResponsive}>
			        <table id="complete" className="tablesorter table table-condensed table-striped table-hover">
						<Headers />
						<Body data={seasonDFData} />
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
    				<th>GP<i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th>SACK<i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th>BLK<i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th>INT<i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th>FUMR<i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th>SFTY<i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th>DEFTD<i className="fa fa-caret-down" aria-hidden="true"></i></th>
    				<th>RETTD<i className="fa fa-caret-down" aria-hidden="true"></i></th>
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

export default CurrentSeasonDFTotal