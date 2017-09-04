import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'

var seasonQBData = require('../../../data.json').lastSeasonQBdata

var LastSeasonQBTotal = React.createClass({
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
				<th>ATT<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>CMP<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>PCT<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>YDS<i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th>TDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>INTS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RUATT<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RUYDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RUTDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
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
				<td>{player.att}</td>
				<td>{player.cmp}</td>
				<td>{player.pct}</td>
				<td>{player.payds}</td>
				<td>{player.patd}</td>
				<td>{player.int}</td>
				<td>{player.ruatt}</td>
				<td>{player.ruyds}</td>
				<td>{player.rutd}</td>
				<td>{player.fpts}</td>
              </tr>
            )
         })}
      </tbody>
    );
  }
})

export default LastSeasonQBTotal