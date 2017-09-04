import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'

var seasonAllData = require('../../../data.json').lastSeasonAlldata

var LastSeasonAllPPG = React.createClass({
  	render: function() {
  		// Hide All table if All Button is not active
  		if (this.props.showAllStats === false) {
    		return null
    	}
	    return (
	      	<div className='stat-container'>
				<div className='stat-table'>
			        <table id="complete">
						<Headers />
						<Body  data={seasonAllData}/>
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
				<th id='widen-th' className='headercol'>PLAYER<i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th>TEAM<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>POS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>GP<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>PATT<i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th>PCMP<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>PYDS<i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th>PTDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>PINT<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>PA%<i className="fa fa-caret-down" aria-hidden="true"></i></th> 
				<th>RUATT<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RUYDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RUTDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>REC<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>REYRD<i className="fa fa-caret-down" aria-hidden="true"></i></th>
				<th>RETDS<i className="fa fa-caret-down" aria-hidden="true"></i></th>
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
                <td id='align-left' className='firstcol'>{player.player}</td> 
				<td>{player.team}</td>
				<td>{player.pos}</td>
				<td>{player.gp}</td>
				<td>{(player.att/player.gp).toFixed(2)}</td>
				<td>{(player.cmp/player.gp).toFixed(2)}</td>
				<td>{(player.payds/player.gp).toFixed(2)}</td>
				<td>{(player.patd/player.gp).toFixed(2)}</td>
				<td>{(player.int/player.gp).toFixed(2)}</td>
				<td>{player.pct}</td>
				<td>{(player.ruatt/player.gp).toFixed(2)}</td>
				<td>{(player.ruyds/player.gp).toFixed(2)}</td>
				<td>{(player.rutd/player.gp).toFixed(2)}</td>
				<td>{(player.rec/player.gp).toFixed(2)}</td>
				<td>{(player.reyds/player.gp).toFixed(2)}</td>
				<td>{(player.retd/player.gp).toFixed(2)}</td>
				<td>{(player.fpts/player.gp).toFixed(2)}</td>
              </tr>
            )
         })}
      </tbody>
    );
  }
})

export default LastSeasonAllPPG