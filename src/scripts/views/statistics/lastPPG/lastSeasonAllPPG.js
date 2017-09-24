import React from 'react'
import Backbone from 'backbone'
import $ from 'jquery'
import Tablesorter from 'tablesorter'
import STORE from '../../../store'
import AllTable from '../components/allTable'
import ReactTooltip from 'react-tooltip'

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
      	<AllTable />
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