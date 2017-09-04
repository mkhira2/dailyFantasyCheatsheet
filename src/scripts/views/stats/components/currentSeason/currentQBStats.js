import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../../store'

var CurrentQBStats = React.createClass({
  	render: function() {
  		var tableResponsive = {
	      overflowX:"auto"
    	}
    	if (this.props.showQBStats === false) {
    		return null
    	}
	    return (
	      	<div className='stat-container'>
				<div className='stat-table' style={tableResponsive}>
			        <table id="complete" className="tablesorter table table-condensed table-striped table-hover">
						<Headers />
						<Body 
						data={this.props.seasonQBData}
						ppgStats={this.props.ppgStats} />
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

  	if (this.props.ppgStats === true) {
	    return (
	      <tbody>
	        {preSortedData.map(function(player, i) {
	            return (
	              <tr key={i}>
					<td id='align-left'>{player.player}</td> 
					<td>{player.team}</td>
					<td>{player.gp}</td>
					<td>{(player.att)/(player.gp)}</td>
					<td>{(player.cmp)/(player.gp)}</td>
					<td>{(player.pct)/(player.gp)}</td>
					<td>{(player.payds)/(player.gp)}</td>
					<td>{(player.patd)/(player.gp)}</td>
					<td>{(player.int)/(player.gp)}</td>
					<td>{(player.ruatt)/(player.gp)}</td>
					<td>{(player.ruyds)/(player.gp)}</td>
					<td>{(player.rutd)/(player.gp)}</td>
					<td>{(player.fpts)/(player.gp)}</td>
	              	</tr>
	            )
	         })}
	      </tbody>
	    )
	}

    else {
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
	    )

    }
  }
})

export default CurrentQBStats